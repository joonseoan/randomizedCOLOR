
// importing the defined value. Do not change the value in "Action_types"
import * as types from '../actions/Action_Types';


// making the beginning state
const initialState = {

    number : 0,
    dummy : 'dummy',
    dumbNumber : {
        // object of object and spread sysntax.
        a : 0,
        b : 1,
        c : 3
    }

};

// if state is undefined ES5
// 1)
/*
export default function counter(state, action) {


    if (typeof state === 'undefined') {

        return initialState;

    }
} */

// if state is undefined ES5
// 2)
// EX6 default argument syntax
// "state = initialState" if state is undefined ES5, use initialState

// action paramerter : it will receive action data from ../actions/index.js
export default  function counter(state = initialState, action) {

    switch (action.type) {
        case types.INCREMENT:
        
        // 1)
        // return ({ number: state.number + 1 });

        // 2)
        // spread : when we are usinb multi object properites
        return ( { ...state, number : state.number + 1 })

        // 3) even it is ok. (object of object)
        /*
        return ({ 
            ...state,
            number : state.number + 1,
            dummyNumber: {...state.dummyNumber, a : 0 }
        });
        */

        case types.DECREMENT:
        return ( { ...state, number : state.number - 1 } );

        // when default, it delivers the existing state so far.
        default : 
        return state;
    }

}

    
    


