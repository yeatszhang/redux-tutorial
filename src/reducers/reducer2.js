/**
 * Created by yichizhang on 15/7/26.
 */

import React from 'react/addons';
import {INCREMENT_COUNTER2, DECREMENT_COUNTER2} from '../constants/actionsTypes.js';
const update = React.addons.update;

const initialState = {
  counter: 0,
};

export default function counter(state = initialState, action = null) {
  switch (action.type) {
    case INCREMENT_COUNTER2:
      return update(state, {
        counter: {
          $set: state.counter + 3,
        },
      });
    case DECREMENT_COUNTER2:
      return update(state, {
        counter: {
          $set: state.counter - 3,
        },
      });
    default:
      return state;
  }
}
