import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import './../styles/Navigation.css'

class Navigation extends Component {
  render(){
    return(
      <div className="navi">
        <h1>TODO APP</h1>
        <NavLink to="/" activeClassName="active" className="non-active" exact={true}>TASKS</NavLink>
        <NavLink to="/add" activeClassName="active" className="non-active">ADD TASK</NavLink>
        <hr />
      </div>
    );
  }
}


export default Navigation;