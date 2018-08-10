import React from 'react';
import ReactDom from 'react-dom';
//module needed for redux
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
//import materializeCss
import 'materialize-css/dist/css/materialize.min.css'


import App from './components/App';

//import reducers
import reducers from './reducers'
import reduxThunk from 'redux-thunk';
const store= createStore(reducers, {},applyMiddleware(reduxThunk));



ReactDom.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.querySelector('#root')
);

