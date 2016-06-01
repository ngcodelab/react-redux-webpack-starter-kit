import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {sayHello, sayBye} from '../actions/greeting_actions';

import GreetControl from './greet_control_component';

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({sayHello, sayBye}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(GreetControl);
