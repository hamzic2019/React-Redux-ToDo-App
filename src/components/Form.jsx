import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addTask} from './../state/actions/todos';

import './../styles/Form.css'

class Form extends Component {
  state = {
    title: '',
    description: ''
  }
  handleSubmit = (e) => {
    e.preventDefault();
    
    this.props.dispatch(addTask({...this.state}));
    this.props.change('/')
  }
  render(){
    return(
      <form 
        className="forma"
        onSubmit={this.handleSubmit}
      >
        <input 
          id="taskTitle" 
          type="text" 
          placeholder="Task Title"
          onChange={(e) => {
            this.setState({...this.state, title: e.target.value})
          }}
        />

        <input 
          id="taskDescription" 
          type="text" 
          placeholder="Task Description"
          onChange={(e) => {
            this.setState({...this.state, description: e.target.value})
          }}
        />
        <input id="submitButton" type="submit" value="Add New Task"/>
      </form>
    );
  }
}


export default connect()(Form);