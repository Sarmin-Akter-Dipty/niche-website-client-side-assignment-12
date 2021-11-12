import React, { useEffect, useState } from 'react';
import manageproducts from '../../Images/images (3).jpg'
import './MnageProducts.css'

const ManageProducts = () => {

    const [services, setServices] = useState([]);
    const [change, setChange] = useState(0)

    useEffect(() => {
        fetch('http://localhost:5000/explore')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [change]);
    const handleDelete = id => {
        const url = `http://localhost:5000/explore/${id}`
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
            <h2 className="text mb-4">Manage Products::::{services.length}</h2>
            <div className="row">
                <div className="col-md-4 ">
                    <img src={manageproducts} alt="" />
                </div>
                <div className="col-md-4">
                    {
                        services?.map(service => <div key={service._id}>
                            <img src={service.img} alt="" />
                            <h3>Product: <span className="text">{service.name}</span></h3>
                            <button className="btn-color text-white rounded px-2 py-1 border-0 mb-3 mt-2 mx-2" onClick={() => handleDelete(service._id)}>Delete</button>

                        </div>)
                    }
                </div>
                <div className="col-md-4">
                    <img src={manageproducts} alt="" />
                </div>

            </div>

        </div>
    );
};

export default ManageProducts;