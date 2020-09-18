import React from "react";
import ReactDOM from "react-dom";

import AppRouters from './routes/AppRouters'
import store from './state/store/configureStore'

import {Provider} from 'react-redux';
import {addTask} from './state/actions/todos';



const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
})


store.dispatch(addTask({title: 'Kupiti voće', description:'Banane i jagode'}));
store.dispatch(addTask({title: 'HARIS'}));


const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <AppRouters />
  </Provider>,
  rootElement
);
