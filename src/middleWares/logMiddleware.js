/**
 * Created by yichizhang on 15/7/26.
 */

// 打印触发的action
function logMiddleware() {
  return function(next) {
    return function(action) {
      console.log(action);
      next(action);
    };
  };
}

export default logMiddleware;
