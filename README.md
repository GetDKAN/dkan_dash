# DKAN Dash

DKAN Dash is a module for creating multi-faceted data visualizations based on datasets in [DKAN](http://getdkan.com/), the [Drupal](https://www.drupal.org/)-based open-source open data portal. Fundamentally it is a wrapper around the [React Dash](https://github.com/NuCivic/react-dash) library. Some of the features include:

* Charting and Graphing with D3 (via NVD3)
* Choropleth Maps
* User filters to interact with data
* Custom layouts with Bootstrap responsive grid
* Metric and Goal components for visually compelling presentations of simple statistics
* Integration with DKAN datasets and the Drupal content system
* Lots more!

As an example of what you might get from wiring it all up, here is a screenshot from a recent project for the Georgia Board for Physician Workforce:

[SCREENSHOT]

Changing the filter values at the top will reload the data -- and, in some cases, change the layout -- of the visualizations below them.

## Who DKAN Dash is for
We built DKAN Dash as a way to do complex custom data visualization dashboards in a repeatable way using DKAN's [Datastore API](http://docs.getdkan.com/en/stable/apis/datastore-api.html) as a data backend. DKAN Dash and its supporting ecosystem are really a development framework that allows for highly customizable data visualizations while minimizing boilerplate code and unnecessary repetition. 

DKAN Dash is a tool that has been fine-tuned to the needs of developers -- Javascript developers in particular, although if you can write JSON you can go far. It does help to have an understanding of current Javascript trends and practices, including such nuggets as React, ES2015, NPM and Javascript package management, etc. That said, we are working hard to lower barriers to entry.

## How it Works

Under the hood DKAN Dash consists of a number of major components:

### React Dash

React Dash is an [open-source library](https://github.com/NuCivic/react-dash) (built with -- yes -- [React](https://facebook.github.io/react/)) that supports the basic functionality of DKAN Dash: charting, mapping, metrics and filtering. As anyone who has worked extensively with JavaScript knows,  it's libraries all the way down -- we use [Bootstrap](https://getbootstrap.com/) to easily handle responsive layouts, [D3](https://d3js.org/) and [NVD3](http://nvd3.org/) as charting engines, as well as a host of smaller libraries.

The definitive feature of React Dash is its configuration-based architecture. An entire dashboard can be created using a declarative configuration object (essentially a large JSON file with a [well-documented schema](https://react-dashboard.readthedocs.io/en/latest/development/settings.js.html)). 

For instance, [this dashboard](https://nucivic.github.io/react-dash/) is built from [this configuration file](https://github.com/NuCivic/react-dash/blob/0.6.12.8/examples/settings.js).

### Datastore API
Not to be confused with the [Dataset REST API](http://docs.getdkan.com/en/stable/apis/rest-api.html), the [Datastore API](http://docs.getdkan.com/en/stable/apis/datastore-api.html) uses a simple POST interface to return filtered data from Dataset resources in DKAN.

### DKAN Dash JavaScript application

The JS app is a thin wrapper around the React Dash library. It provides an interface to [Drupal's global JavaScript object](https://www.drupal.org/docs/7/api/javascript-api/javascript-api-overview), and provides a model layer that can convert defined queries (in the settings file) and user-applied filters into valid queries against the DKAN Datastore API, which are then used the populate the dashboard.

### Drupal module
The [Drupal module](https://github.com/NuCivic/dkan_dash) provides a _Dashboard_ content type where dashboard settings are stored as JSON. The module also provides basic Drupal routing, permissions, etc. When the dashboard page is visited, the DKAN Dash Javascript application is embedded in the page and passed the configuration settings from the entity.

The modules also provides a browser-based JSON editor to make modifying dashboard configurations easier:

![screenshot from 2017-05-18 16-28-18](https://cloud.githubusercontent.com/assets/309671/26248963/5df69bc8-3c72-11e7-947d-e1e232839c1a.png)

### Custom implementation module

In addition to the settings object, which is stored in the database, the DKAN Dash Javascript app can load custom handling functions, css, and other code from a custom, project-specific module. While most of any DKAN Dash implementation lives in the configuration object, the ability to add custom code here allows developers to preprocess their data for consumption by the dashboard components. An example can be seen [here](https://github.com/NuCivic/custom_dash).

## Roadmap

The future of DKAN Dash and its underlying libraries is bright. As we continue to roll out dashboard implementations the list of features grows, and the stability and performance of the platform continues to improve. While development at this point is being driven by immediate project requirements, there are some big things brewing:

### Dashboard Creation - UX
Currently, in order to generate the dashboard pages you need to speak Javascript - or at least JSON. We are looking forward to the day, however, when less technical users can use an graphical interface to generate visualizations related to their DKAN data.

### Additional components

Under development we have:

* Slideshows
* Accordion-style expanding and collapsing of layout regions
* Real-time updates with websockets

### i18n and string support

There is currently no easy way to publish multilingual dashboards. A future version will leverage Drupal's string and entity translation systems, and make strings (such as captions, intro text or even chart labels) easier for non-technical users to both modify and translate.

### Better documentation and examples

The react-dash library [ships with an example project](https://github.com/NuCivic/react-dash/tree/master/examples) and has a [full documentation site](https://react-dashboard.readthedocs.io). Future releases of DKAN Dash could include a working example in the [custom_dash](https://github.com/NuCivic/custom_dash) repository or elsewhere, along with more complete documentation for how to implement dashboards in DKAN.

## Further reading

1. The [React Dash](https://react-dashboard.readthedocs.io) documentation is a complete resource for information on the standalone library.
2. Take a look at the files in the [custom_dash](https://github.com/NuCivic/custom_dash) repo to see how a specific implementation would be structured.
3. Look for news and updates on the [DKAN blog](http://getdkan.com/blog/)
4. Join the `#dashboards` channel on the [DKAN Community Slack](https://dkansignup.herokuapp.com/)
