import React from 'react';
import './componentStyles/BackgroundGradients.css'

function BackgroundGradients() {
    return (
        <div className="container1">
            <div className="firstinner">
                <div className="gradient1"></div>
            </div>

            <div className="innercontainer">
                <div className="gradient2"></div>
                <div className="gradient4"></div>
            </div>
            
            <div className="lastinner">
                <div className="gradient3"></div>
            </div>
        </div>
    );
};

export default BackgroundGradients;
