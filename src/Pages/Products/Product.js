import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css'

const Product = (props) => {
    //distructuring
    const { _id, img, name, description, price } = props.user
    return (
        <div className="col-md-3">
            <div className="cart">
                <div className="img">
                    <img src={img} alt="" />
                </div>
                <h6>{name}</h6>
                <h5>{price}$</h5>
                <p><small>{description}</small></p>
                <Link to={`/ordernow/${_id} `}>
                    <button className="btn btn-color">Order Now {name.toLowerCase()}</button>
                </Link>

            </div>
        </div >
    );
};

export default Product;