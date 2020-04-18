import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyButton extends Component {
    render() {
        return (
            <button className="btn btn-primary" onClick={() => this.props.addItem() }>
                Add Item!!
            </button>  
        )
    }
}

MyButton.propTypes = {
    addItem: PropTypes.func.isRequired
};

export default MyButton;
