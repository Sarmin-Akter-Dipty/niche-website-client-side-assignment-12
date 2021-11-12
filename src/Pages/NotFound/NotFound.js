import React from 'react';
import NotFound1 from '../Images/images (3).png'

const NotFound = () => {
    return (
        <div>
            <h6 className="text my-4">Oops! Something went wrong.</h6>
            <h1 className="text-warning my-3">404</h1>
            <h5>Page not found,please enter a valid name.</h5>
            <img className=" my-5" src={NotFound1} alt="" />
        </div>
    );
};

export default NotFound;