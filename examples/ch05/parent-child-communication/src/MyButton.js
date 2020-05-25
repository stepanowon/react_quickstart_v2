import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class MyButton extends PureComponent {
    // shouldComponentUpdate(nextProps, nextState) {
    //     return false;
    // }   
    
    render() {
        console.log("## MyButton 렌더!");
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
