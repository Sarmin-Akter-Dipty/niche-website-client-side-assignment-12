import React from 'react';

const Reveiw = (props) => {
    const { email, comments, rating } = props.review
    return (
        <div className="col-md-4">
            <div className="cart btn-color border-0">
                <h3 className="text-white">User:<span className="text">{email}</span></h3>
                <h3 className="text">Comments: <span className="text-white">{comments}</span></h3>
                <h3 className="text-white">Rating: <span className="text">{rating}</span></h3>

            </div>
        </div >
    );
};

export default Reveiw;