import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const OrderNow = () => {
    const { itemId } = useParams();
    const [item, setItem] = useState({});
    const { user } = useAuth();

    console.log(item);
    useEffect(() => {

        fetch(`http://localhost:5000/items/${itemId}`)
            .then(res => res.json())
            .then(data => setItem(data))
    }, [itemId])

    const {
        register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = (data) => {

        data.item = item;
        data.status = 'Pending'
        fetch("http://localhost:5000/orders", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => console.log(result));
        console.log(data);
        reset()
    };
    return (
        <div>
            <div className="row my-5 ">
                <div className="col-md-3 my-5">
                    <div className="image-size mt-5">
                        <img src={item?.img} alt="" />
                    </div>

                    <h3>{item?.name}</h3>
                    <h5>{item?.price}</h5>
                    <p>{item?.description}</p>

                </div>

                <div className="col-md-9">
                    <h1 className="text-center"> Fill up your form</h1>
                    <div className="w-25 m-auto mt-5">
                        <div className="container border border d-flex justify-content-center align-items-center">
                            <div>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <input defaultValue={user.displayName} {...register("name")} placeholder="Name" className="p-2 m-2" /> <br />
                                    <input defaultValue={user.email}  {...register("email", { required: true })} placeholder="Email" className="p-2 m-2" />  <br />
                                    <input {...register("date", { required: true })} placeholder="date" defaultValue={new Date()} className="p-2 m-2" />
                                    <br />
                                    <input {...register("address", { required: true })} placeholder="Address" className="p-2 m-2" />
                                    <br />
                                    <input {...register("number", { required: true })} placeholder="Phone Number" className="p-2 m-2" />
                                    <br />
                                    {errors.exampleRequired && <span>This field is required</span>}
                                    <input type="submit" className="btn btn-color w-50" />
                                </form>
                                <p className="m-2 mb-2"> Already have account?{" "}
                                    <Link to="/login">
                                        <span className="text-warning">Create an account</span>
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {user?.email && <Link to="/dashboard"><button className="btn-color rounded px-4 py-2 border-0 my-5 mx-2">DashBoard</button></Link>}

        </div>

    );
};

export default OrderNow;