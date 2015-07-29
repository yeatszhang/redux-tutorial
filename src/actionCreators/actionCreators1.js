/**
 * Created by yichizhang on 15/7/26.
 */
import {INCREMENT_COUNTER1, DECREMENT_COUNTER1} from '../constants/actionsTypes.js';

const actionCreators = {};

actionCreators.increment = function() {
  return {
    type: INCREMENT_COUNTER1,
  };
};

actionCreators.decrement = function() {
  return {
    type: DECREMENT_COUNTER1,
  };
};

actionCreators.incrementIfOdd = function() {
  return (dispatch, getState) => {
    const counter = getState().reducer1.counter;

    if (counter % 2 === 0) {
      return;
    }

    dispatch(actionCreators.increment());
  };
};

export default actionCreators;
