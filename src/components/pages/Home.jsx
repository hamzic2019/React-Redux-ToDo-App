import React, {Component} from 'react';
import {connect} from 'react-redux';

import Task from './../Task'

class Home extends Component {
  render(){
    
    return(

      <div>
        {
          this.props.todos.map((todo) => {
            return <Task key={todo.id} {...todo} />
          })
        }
      </div>


    );
  }
}


export default connect((state) => {
  return {
    todos: state.todos,
    filters: state.filters
  }
})(Home);