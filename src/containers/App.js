import React from 'react';
import { createStore, applyMiddleware, combineReducers } from 'redux';
// redux midlleware repositories
import thunk from 'redux-thunk';
// 将 redux 与 react 相关的部分，如 connector provider 单独抽取出来
import { Provider } from 'react-redux';
import reducers from '../reducers';
import CounterApp from './CounterApp.js';
import logMiddleware from '../middleWares/logMiddleware.js';

const reducer = combineReducers(reducers);
// 使用middleWare thunk， 如果没有自定义中间层的需求可以直接 const store = createStore(reducer);
const createStoreWithMiddleware = applyMiddleware(logMiddleware, thunk)(createStore);
const store = createStoreWithMiddleware(reducer);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        {() => <CounterApp />}
      </Provider>
    );
  }
}

export default App;
