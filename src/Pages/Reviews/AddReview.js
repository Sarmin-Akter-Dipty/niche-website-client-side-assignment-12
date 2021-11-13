import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';

const AddReview = () => {
    const { register, handleSubmit, reset } = useForm();
    const { user } = useAuth();

    const onSubmit = (data) => {
        fetch("http://localhost:5000/addReview", {
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
            <h1 className="text m-4">Customers Review</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    className="input-field w-25 rounded mb-1"
                    name="email"
                    value={user?.email}
                    type="email"
                    {...register("email", { required: true })}
                />
                <br />
                <input
                    className="input-field w-25 rounded mb-1"
                    name="comments"
                    placeholder="Comments"
                    {...register("comments", { required: true })}
                />
                <br />
                <input
                    className="input-field w-25 rounded mb-1"
                    name="rating"
                    placeholder="Rating"
                    {...register("rating", { required: true })}
                />
                <br />

                <input
                    className="submit-btn btn btn-color-3 text-white mt-3"
                    type="submit"
                    value="Register"
                />
            </form>
        </div>
    );
};

export default AddReview;