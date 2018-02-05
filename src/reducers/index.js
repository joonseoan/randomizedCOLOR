// combine two reduecers
import { combineReducers } from 'redux';


// call two reducers
import ui from './ui';
import counter from './counter';

const reducers = combineReducers({

    // it is a simple combineReducers
    counter, ui

});

export default reducers;

