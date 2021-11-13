import React, { useEffect, useState } from 'react';
import Reveiw from './Reveiw';



const Reviews = () => {
    const [reviews, setReviews] = useState([])


    useEffect(() => {
        fetch(`https://boiling-escarpment-36459.herokuapp.com/review`)
            .then(res => res.json())
            .then(data => setReviews(data))

    }, [])
    console.log(reviews);

    return (
        <div className="row">
            <h1 className="text mb-5">Customers Review : {reviews.length}</h1>

            {
                reviews.map(review => <Reveiw key={review._id} review={review}></Reveiw>)
            }

        </div>
    );
};

export default Reviews;
