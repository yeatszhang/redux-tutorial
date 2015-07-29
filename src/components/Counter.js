/**
 * Created by yichizhang on 15/7/26.
 */

import React, { Component, PropTypes } from 'react';

export default class Counter extends Component {
  static propTypes = {
    increment: PropTypes.func.isRequired,
    incrementIfOdd: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    counter1: PropTypes.number.isRequired,
    counter2: PropTypes.number.isRequired,
    incrementAsync: PropTypes.number.isRequired,
  };

  render() {
    const { increment, incrementIfOdd, incrementAsync, decrement, counter1, counter2 } = this.props;
    return (
      <p>
        Clicked: {counter1} + {counter2} times
        {' '}
        <button onClick={increment}>+</button>
        {' '}
        <button onClick={decrement}>-</button>
        {' '}
        <button onClick={incrementIfOdd}>Increment if odd</button>
        {' '}
        <button onClick={incrementAsync}>IncrementAsync</button>
      </p>
    );
  }
}
