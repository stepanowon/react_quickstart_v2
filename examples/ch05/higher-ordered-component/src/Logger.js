import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ms from 'microseconds';

let Logger = (LoggingComponent) => {
    class Logger extends Component {
        constructor(props) {
            super(props);
            if (this.props.isLog) {
                this.start = ms.now();
            }  
        }
        componentDidMount() {
            if (this.props.isLog) {
                let ts = ms.now() - this.start;
                console.log(`### ${LoggingComponent.name} 마운트 : ${ts} micro seconds `);
            }
        }
        shouldComponentUpdate(nextProps, nextState) {
            if (nextProps.isLog) {
                this.start = ms.now();
            }  
            return true;
        }
        componentDidUpdate(prevProps, prevState) {
            if (this.props.isLog) {
                let ts = ms.now() - this.start;
                console.log(`### ${LoggingComponent.name} 업데이트 : ${ts} micro seconds `);
            }
        } 
        render() {
            return <LoggingComponent {...this.props} />
        }
    }

    Logger.propTypes = {
        isLog : PropTypes.bool
    };    
    Logger.defaultProps = {
        isLog : false
    };
    return Logger;
};

export default Logger;
