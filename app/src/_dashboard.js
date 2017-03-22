import React, { Component } from 'react';
import {Dashboard, Dataset} from 'react-dashboard';
import NVD3Chart from 'react-nvd3';
import {mapValues, map, isEmpty, omit} from 'lodash';
import 'whatwg-fetch'

export default class GADashboard extends Dashboard {

  constructor(props) {
    super(props);
    this.state = {
      queries: this.props.queries
   };
   console.log('gpbd dashboard.js');
  }

  componentDidMount() {
    this.fetchData(this.state.queries);
  }

  fetchData(queries) {
    fetch('/dashboard_data/54', {
      method: 'post',
      body: JSON.stringify(queries)
    }).then(response => {
      return response.json();
    }).then( data => {
      this.setState({data: data});
    });
  }


  filter(queries, values, field) {
    let empty = isEmpty(values);
    return mapValues(queries, function(query) {
      if(empty) return omit(query, field);
      query[field] = values;
      return query;
    });
  }

  onAction(payload) {
    console.log('ugh');
    switch(payload.actionType) {
      case 'AUTOCOMPLETE_CHANGE':
        let values = map(payload.value, 'value');
        let field = payload.id.split('-')[0];
        let q = this.filter(this.state.queries, values, field);
        console.log(q);
        this.setState({queries: q});
        this.fetchData(q);
        break;
    }
  }

}
