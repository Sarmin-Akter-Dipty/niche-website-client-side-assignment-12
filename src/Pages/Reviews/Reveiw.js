import React from 'react';
import RatingIcon from '../Rating/RatingIcon';

const Reveiw = (props) => {
    const { email, comments, rating } = props.review
    return (
        <div className="col-md-4">
            <div className="cart btn-color border-0">
                <h3 className="text">User:<span className="text-white">{email}</span></h3>
                <h3 className="text">Comments: <span className="text-white">{comments}</span></h3>
                <h3 className="text mx-3">Rating: <span className="text-white"> <RatingIcon ratings={rating}></RatingIcon>
                </span></h3>

            </div>
        </div >
    );
};

export default Reveiw;