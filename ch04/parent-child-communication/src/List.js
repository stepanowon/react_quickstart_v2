import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ListItem from './ListItem';

class List extends Component {
    render() {
        let items = this.props.itemlist.map((item) => {
            return (<ListItem key={item.no} item={item} />)
        });
    
        return (
            <ul className="list-group">
                {items}
            </ul>
        )
    }
}

List.propTypes = {
    itemlist : PropTypes.arrayOf(PropTypes.object)
};

export default List;
