/**
 * Remove the css files you don't need because
 * they are loaded by the environment.
 */
import 'nvd3/build/nv.d3.min.css';
import 'react-dash/dist/react-dashboard.min.css';
import 'react-select/dist/react-select.min.css';
import 'fixed-data-table/dist/fixed-data-table.min.css';
import './react-dashboard.min.css';

/**
 * Don't remove this. Required dependencies.
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { settings } from './settings';
import GADashboard from './app';

class MyDashboard extends Component {
  render() {
    let z = {};
    z.appliedFilters = (this.state) ? this.state.appliedFilters : {};
    const props = Object.assign({}, this.props, z, settings);
    return <GADashboard {...props}/>
  }
}

// Wrap Dashboard component in router
class App extends Component {
  render() {
    return (
      <div id="router-container">
        <Router history={browserHistory}>
          <Route path='*' component={MyDashboard} />
          <Route path='/react-dashboard' component={MyDashboard} />
        </Router>
      </div>
    )
  }
}

/**
 * This renders the GADAshboard
 */
document.addEventListener('DOMContentLoaded', function(event) {
  ReactDOM.render(<App />, document.getElementById('root'));
});
