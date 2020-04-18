import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Logger from './Logger';

class ListItem extends PureComponent {

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

export default Logger(ListItem);
