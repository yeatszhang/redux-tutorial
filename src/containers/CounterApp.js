/**
 * Created by yichizhang on 15/7/26.
 */

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Connector } from 'react-redux';
import Counter from '../components/Counter';
import actionCreators1 from '../actionCreators/actionCreators1.js';
import actionCreators2 from '../actionCreators/actionCreators2.js';

function select(state) {
  return {
    counter1: state.reducer1.counter,
    counter2: state.reducer2.counter,
  };
}

export default class CounterApp extends Component {
  renderChild({ counter1, counter2, dispatch}) {
    const actions1 = bindActionCreators(actionCreators1, dispatch);
    const actions2 = bindActionCreators(actionCreators2, dispatch);
    const props = { ...actions1, ...actions2, counter1, counter2 };
    return <Counter {...props} />;
  }

  render() {
    return (
      <Connector select={select}>
        {this.renderChild}
      </Connector>
    );
  }
}
