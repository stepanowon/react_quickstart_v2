import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class ListItem extends PureComponent {
    // shouldComponentUpdate(nextProps, nextState) {
    //     return this.props.item !== nextProps.item;
    // }

    render() {
        console.log("## ListItem 렌더!");
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
