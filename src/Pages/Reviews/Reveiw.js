import React from 'react';

const Reveiw = (props) => {
    const { email, comments, rating } = props.review
    return (
        <div className="col-md-4">
            <div className="cart btn-color border-0">
                <h3 className="text">User:<span className="text-white">{email}</span></h3>
                <h3 className="text">Comments: <span className="text-white">{comments}</span></h3>
                <h3 className="text">Rating: <span className="text-white">{rating}</span></h3>

            </div>
        </div >
    );
};

export default Reveiw;