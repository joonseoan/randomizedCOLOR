import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

// in order to create sote in index.js here
import { createStore } from 'redux';

// import all index.js which has "combineReducers"
import reducers from './reducers';

// all files from "actions" folder
// import * as actions from './actions';

// provider : view layer binding (it is like IT dept)
// it is a component.
import { Provider } from 'react-redux';

// connection function
// connect([...options]) : it receives the option parameter and returns **** "another function"



/**
 *  store
 * 
 *  dispatch(action) : send "action" to reducers
 *  getState() : return the current state
 *  subscribe(listener) : whenever the state changes, it registers the new state to the result we want to get
 *      "listener" is a callback function whenever the state changes.
 *  
 */

//"reducers" is a paramerter
const store = createStore (reducers);

/*
// current data
console.log(store.getState());

// register the changed and new value to the result.
//store.subscribe( () => console.log (store.getState()));

// sends starting action to the "actions"
// actions !!!!!! ==== object!!!!!!!!!!

store.dispatch(actions.increment())
store.dispatch(actions.increment());
store.dispatch(actions.decrement());
store.dispatch(actions.setColor([255, 245, 245]));


const unsubscribe = store.subscribe( () => console.log (store.getState()));
store.dispatch(actions.increment())
store.dispatch(actions.increment());
store.dispatch(actions.decrement());
store.dispatch(actions.setColor([255, 245, 245]));

unsubscribe();

store.dispatch(actions.setColor([205, 205, 205]));
*/


ReactDOM.render(
<Provider store={store}> 
    <App />
</Provider>,
 document.getElementById('root'));

