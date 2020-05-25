import React from 'react';
import Loader from "react-loader-spinner";

const Loading = () => {
    return (
        <div className="bg-white w-100 h-100 position-fixed" style={{ top:0, left:0, opacity:0.9 }}>
            <div className="row w-100 h-100 justify-content-center align-items-center">
                <div className="col-6 text-center">
                    <h3>처리중</h3>
                    <Loader type="Bars" color="gray" height={40} width={40} />
                </div>
            </div>
        </div>
    );
};

export default Loading;