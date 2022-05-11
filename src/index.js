import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'

import {createStore, applyMiddleware  } from 'redux';
import ReduxThunk  from 'redux-thunk'
import reducers from  './State/reducers'

const store = createStore(reducers,{},applyMiddleware(ReduxThunk))



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);


