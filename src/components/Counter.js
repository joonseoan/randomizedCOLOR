import React, { Component } from 'react';

//import PropTypes from 'prop-types';

import Value from './Value';
import Control from './Control';

//import { connect, bindActionCreators } from 'react-redux';
import { connect } from 'react-redux';

import * as actions from '../actions';


class Counter extends Component {

    constructor (props) {

        super(props);

        this.setRandomColor = this.setRandomColor.bind(this);

    }

    // color option

    setRandomColor () {
        const color = [

            Math.floor((Math.random() * 55) + 200),
            Math.floor((Math.random() * 55) + 200),
            Math.floor((Math.random() * 55) + 200)
        
        ]

       // call the object which is a function
        this.props.handleSetColor(color);
    }


    render () {

        const color = this.props.color;
        const style = {

            background : `rgb(${color[0]}, ${color[1]}, ${color[2]})`

        };

        return (

            <div style = {style}>
                <Value number = {this.props.number} />
                <Control
                    onPlus = {this.props.handleIncrement}
                    onSubstract = {this.props.handleDecrement}
                    onRandomizeColor = {this.setRandomColor}
                />

                </div>


        )



    }

     

}


// "state" is not a component. It is just paramerter
// Initializes a functions. => current state.
const mapStateToProps = (state) => {

    return ({

        number : state.counter.number,
        color : state.ui.color

    });
}


const mapDispatchToProps = (dispatch) => {

    
    // It is a way to call functions because it is dispatch...
    // Dispatch is a function.
    // 1)
    return ({
        
        handleIncrement: () => { dispatch(actions.increment()) },
        handleDecrement: () => { dispatch(actions.decrement()) },
        handleSetColor: (color) => { dispatch(actions.setColor(color)) }
    
    });
    

    // By using bindActionCreators
    // 2)

    // not useful

    /*
    return (

        bindActionCreators(actions, dipatch)


    );
    */
}

// export default Counter;

// connect
 export default connect(mapStateToProps, mapDispatchToProps)(Counter);
// export default connect(mapDispatchToProps)(Counter);