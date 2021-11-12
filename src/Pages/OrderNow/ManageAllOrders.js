import React, { useEffect, useState } from 'react';

const ManageAllOrders = () => {
    const [orders, setOrders] = useState([]);
    const [status, setStatus] = useState(null)
    useEffect(() => {
        fetch("http://localhost:5000/allOrders")
            .then((res) => res.json())
            .then((data) => setOrders(data));
    }, [status]);

    console.log(orders);
    const handleDelete = email => {
        const proceed = window.confirm('Are you sure ,you wanted delete?');
        if (proceed) {
            const url = `http://localhost:5000/allOrders/${email}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {

                    if (data.deletedCount) {

                        alert('Deleted successfully')
                        const remaining = orders.filter(order => order._id !== email)
                        setOrders(remaining);

                    }
                })
        }
    }

    const approveOrder = id => {
        const url = `http://localhost:5000/myorders?id=${id}`
        fetch(url, {
            method: 'PUT',

        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setStatus(!status)
                }
                else {
                    setStatus(false)
                }
            })
    }
    return (
        <div>
            <h2>All Orders::::{orders.length}</h2>
            {orders?.map(order => <div key={order._id}>
                <h3>Order Name: <span className="text">{order.item.name}</span></h3>
                <div className="image-size"><img src={order.item.img} alt="" /></div>
                <h3>User Name:{order.name}</h3>
                <h3>User Email:{order.email}</h3>
                <h3>User Address:{order.address}</h3>
                <h4>Status: <span className="text-primary">{order.status}</span></h4>
                <button className="btn-color rounded px-4 py-2 border-0 my-5 mx-2" onClick={() => handleDelete(order._id)}>Delete</button>
                <button className="btn-color text-white rounded px-4 py-2 border-0 my-5 mx-2" onClick={() => approveOrder(order._id)}>Approve</button>
            </div>)}


        </div>
    );
};

export default ManageAllOrders;