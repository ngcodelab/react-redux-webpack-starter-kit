import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Greet from './greet_component';

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Greet);
