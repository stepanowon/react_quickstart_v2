import React from 'react';
import Loader from "react-loader-spinner";

const Loading = () => {
    return (
        <div className="w-100 h-75 position-fixed">
            <div className="row w-100 h-100 justify-content-center align-items-center">
                <div className="col-6 text-center">
                    <h3>Loading</h3>
                    <Loader type="Bars" color="gray" height={40} width={40} />
                </div>
            </div>
        </div>
    );
};

export default Loading;