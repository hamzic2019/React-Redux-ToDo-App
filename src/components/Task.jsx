import React, {Component} from 'react';
import {removeTask} from './../state/actions/todos';
import {connect} from 'react-redux';

import './../styles/Task.css'

class Task extends Component {
  handleClick = () => {
    this.props.dispatch(removeTask({id: this.props.id}));
  }
  render(){
  
    return(
      <div className="task">
        <h1>{this.props.title}</h1>
        <p>{this.props.description}</p>
        <button onClick={this.handleClick}>REMOVE</button>
      </div>
    )
  }
}


export default connect()(Task);