import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Provider } from "react-redux";

import Create from './components/fruit/create.component';
import Edit from './components/fruit/edit.component';
import Index from './components/fruit/index.component';
import CreateVeg from './components/vegetable/create.component';
import EditVeg from './components/vegetable/edit.component';
import IndexVeg from './components/vegetable/index.component';

import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <Link to={'/'} className="navbar-brand">Salad Maker</Link>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item">
                    <Link to={'/'} className="nav-link">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link to={'/create/fruit/'} className="nav-link">Create Fruit</Link>
                  </li>
                  <li className="nav-item">
                    <Link to={'/fruits/'} className="nav-link">Fruits List</Link>
                  </li>
                  <li className="nav-item">
                    <Link to={'/create/vegetable/'} className="nav-link">Create Vegetable</Link>
                  </li>
                  <li className="nav-item">
                    <Link to={'/vegetables/'} className="nav-link">Vegetables List</Link>
                  </li>
                </ul>
              </div>
            </nav> <br />
            <h2 className="text-center">
              Make your own customisable salad
              <small className="text-muted"> - with fruits and veggies</small>
            </h2>
            <br />
            <Switch>
              <Route exact path='/' />
              <Route path='/fruits/' component={Index} />
              <Route path='/create/fruit' render={() => <Create type={'fruit'} />} />
              <Route path='/fruit/:id/update/' component={Edit} />
              <Route path='/vegetables/' component={IndexVeg} />
              <Route path='/create/vegetable/' render={() => <CreateVeg type={'vegetable'} />} />
              <Route path='/vegetable/:id/update/' component={EditVeg} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;