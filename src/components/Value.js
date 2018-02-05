import React, { Component } from 'react';
// import PropTypes from 'prop-types';

/*
const propTypes =  {

    number1 : PropTypes.number
};


const defaultProps = {

    // -1 stands for the props does not have basic value. 
    number : -1

};*/

class Value extends Component {

   
    render() {

        return (

            <div>
            <h1>{this.props.number}</h1>
            </div>

        );

    }

}

//Value.propTypes = PropTypes;
//Value.defaultProps = defaultProps;

export default Value;