import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import Product from './Product';

const Products = () => {
    const [users, setusers] = useState([])

    useEffect(() => {
        fetch('https://boiling-escarpment-36459.herokuapp.com/items')
            .then(res => res.json())
            .then(data => setusers(data));
    }, [])
    console.log(users);
    const { isLoading } = useAuth();
    if (isLoading) {
        return <Spinner animation="border" variant="success" />
    };
    return (

        <div className="row">
            <h1 className="my-4 text">Our Phones</h1>
            {
                users.map(user => <Product key={user._id} user={user}></Product>)
            }

        </div>
    );
};

export default Products;