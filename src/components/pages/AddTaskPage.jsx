import React, {Component} from 'react';
import {connect} from 'react-redux';
import Form from './../Form';

class AddTask extends Component {
  render(){
    return(
      <Form change={this.props.history.push} />
    );
  }
}


export default connect()(AddTask);