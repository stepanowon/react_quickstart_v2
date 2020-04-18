import React from 'react';
import MyTime from './MyTime';
import PropTypes from 'prop-types';

import TimeActionCreator from '../redux/TimeActionCreator';
import { connect } from 'react-redux';

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

const mapStateToProps = (state)=> {
    return {
        currentTime : state.home.currentTime
    }
}
const mapDispatchToProps = (dispatch)=> {
    return {
        changeTime : () => dispatch(TimeActionCreator.asyncChangeTime()),
    }
}

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);
export default HomeContainer;