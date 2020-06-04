import React from 'react';
const NotFound = (props) => {
    return (
        <div className="m-3">
            <h3>존재하지 않는 경로</h3>
            <p>요청 경로 : {props.location.pathname}</p>
        </div>
    );
};
export default NotFound;