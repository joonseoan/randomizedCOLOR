// When not using export "default" suca as "const"
// 1)
// import { INCREMENT, DECREMENT, SET_COLOR } from './Action_Types';

// When not using export "default" suca as "const"
// 2)
import * as types from './Action_Types';

export function increment() {
    
    return {
        // "types.Increment" 
        type : types.INCREMENT
    }
}

export function decrement() {
    
    return {
        type : types.DECREMENT
    }
}

export function setColor(color) {

    return {
        type : types.SET_COLOR,
        //color : color
        color
    }
}