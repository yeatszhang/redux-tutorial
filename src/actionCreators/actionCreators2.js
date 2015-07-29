/**
 * Created by yichizhang on 15/7/26.
 */
import {INCREMENT_COUNTER2} from '../constants/actionsTypes.js';

const actionCreators = {};

actionCreators.incrementAsync = function() {
  return (dispatch, getState) => {
    // actionCreator中可以通过getState获得当前的state
    console.log(getState());
    setTimeout(() => {
      dispatch({
        type: INCREMENT_COUNTER2,
      });
    }, 1000);
  };
};

export default actionCreators;
