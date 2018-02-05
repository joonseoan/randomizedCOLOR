import * as types from '../actions/Action_Types';

const initialState = {

    color : [200, 200, 200]

};

export default function ui(state = initialState, action) {

    if (action.type === types.SET_COLOR) {

        return ({

            color: action.color
        
        });
    
    } else {

        return state;

    }
}