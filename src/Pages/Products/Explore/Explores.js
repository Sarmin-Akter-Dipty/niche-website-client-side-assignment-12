import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import Explore from './Explore';

const Explores = () => {

    const [users, setusers] = useState([])

    useEffect(() => {
        fetch('https://boiling-escarpment-36459.herokuapp.com/explore')
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
            <h1 className="my-4 text">Our More Explore Phones : {users.length}</h1>
            {
                users.map(user => <Explore key={user._id} user={user}></Explore>)
            }

        </div>
    );
};

export default Explores;