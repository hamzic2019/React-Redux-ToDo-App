import React, {Component} from 'react';
import {connect} from 'react-redux';

class AddTask extends Component {
  render(){
    return(
      <h1>AddTask</h1>
    );
  }
}


export default connect()(AddTask);