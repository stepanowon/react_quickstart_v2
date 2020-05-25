import React from 'react';
import MyTime from './MyTime';
import PropTypes from 'prop-types';

import TimeActionCreator from '../redux/TimeActionCreator';
import { useSelector, useDispatch } from 'react-redux';

const Home = (props) => {
    return (
        <div className="card card-body">
            <h2>Home</h2>
            <MyTime currentTime={props.currentTime} changeTime={props.changeTime} />
        </div>
    );
};

Home.propTypes = {
    currentTime: PropTypes.object.isRequired,
    changeTime: PropTypes.func.isRequired
};

const HomeContainer = () => {
    const dispatch = useDispatch()

    var propsObject = {
        currentTime : useSelector(state => state.home.currentTime),
        changeTime : () => dispatch(TimeActionCreator.asyncChangeTime()),
    }

    return (
        <Home {...propsObject} />
    );
};

export default HomeContainer;
