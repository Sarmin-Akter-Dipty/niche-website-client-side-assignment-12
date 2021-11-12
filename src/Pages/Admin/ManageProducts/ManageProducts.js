import React, { useEffect, useState } from 'react';

const ManageProducts = () => {

    const [services, setServices] = useState([]);
    const [change, setChange] = useState(0)

    useEffect(() => {
        fetch('http://localhost:5000/items')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [change]);
    const handleDelete = id => {
        const url = `http://localhost:5000/items/${id}`
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                setChange(change + 1)
                if (data.deletedCount) {

                    alert('deleted')
                    const remaining = services.filter(service => service._id !== id)
                    setServices(remaining)
                }
            })

    }
    return (
        <div>
            <h2>Manage Products</h2>
            {
                services?.map(service => <div key={service._id}>
                    <h3>{service.name}</h3>
                    <button onClick={() => handleDelete(service._id)}>Delete</button>

                </div>)
            }
        </div>
    );
};

export default ManageProducts;