import React, {Component} from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';

// Pages
import Home from './../components/pages/Home';
import AddTaskPage from './../components/pages/AddTaskPage';

// Components
import Navigation from './../components/Navigation'

class AppRouters extends Component {
  render(){
    return(
      <BrowserRouter>
       <Navigation />
        <Switch>
          <Route path="/" component={Home} exact={true} />
          <Route path="/add" component={AddTaskPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}


export default AppRouters;