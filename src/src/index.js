import React from 'react';
import { render } from 'react-dom';
import './index.css';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import allReducers from './reducers'
import App from './containers/app'

const store = createStore(allReducers)

console.log(store.getState());

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
  
)