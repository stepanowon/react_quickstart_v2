import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ListItem extends Component {
    render() {
        return (
            <li className="list-group-item list-group-item-success">
                {this.props.item.no} : {this.props.item.itemname}
            </li>
        )
    }
}

ListItem.propTypes = {
    item : PropTypes.object.isRequired
};

export default ListItem;
