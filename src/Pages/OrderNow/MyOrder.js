import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import myorders from '../Images/images (1).png'

const MyOrder = () => {
    const [myOrders, setMyOrders] = useState([])
    const [status, setStatus] = useState(null)
    const { user } = useAuth()
    useEffect(() => {
        fetch(`http://localhost:5000/myorders?email=${user.email}`)
            .then(res => res.json())
            .then(data => setMyOrders(data))

    }, [user.email, status])
    console.log(myOrders);
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure ,you wanted delete?');
        if (proceed) {
            const url = `http://localhost:5000/allOrders/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {

                    if (data.deletedCount) {

                        alert('Deleted successfully')
                        const remaining = myOrders.filter(order => order._id !== id)
                        setMyOrders(remaining);

                    }
                })
        }
    }
    // const approveOrder = id => {
    //     const url = `http://localhost:5000/myorders?id=${id}`
    //     fetch(url, {
    //         method: 'PUT',

    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             if (data.modifiedCount) {
    //                 setStatus(!status)
    //             }
    //             else {
    //                 setStatus(false)
    //             }
    //         })
    // }
    return (
        <div>
            <h2>My Orders:{myOrders.length}</h2>
            <div className="row">
                <div className="col-md-4">
                    <img src={myorders} alt="" />
                </div>
                <div className="col-md-4">
                    {
                        myOrders?.map(order => <div key={order.item._id}>
                            <h3>Order Name: <span className="text">{order.item.name}</span></h3>
                            <div className="image-size"> <img src={order?.item.img} alt="" /></div>

                            <h4>Status: <span className="text-primary">{order.status}</span></h4>
                            <button className="btn-color rounded px-4 py-2 border-0 my-5 mx-2" onClick={() => handleDelete(order._id)}>Delete</button>
                            {/* <button className="bg-success text-white rounded px-4 py-2 border-0 my-5 mx-2" onClick={() => approveOrder(order._id)}>Approve</button> */}
                        </div>)
                    }
                </div>
                <div className="col-md-4">
                    <img src={myorders} alt="" />
                </div>
            </div>


        </div>
    );
};

export default MyOrder;