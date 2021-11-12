import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import './AddPhones.css'

const AddPhones = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('http://localhost:5000/items', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully')
                    reset()
                }
            })
    }
    return (
        <div className="add-service">
            <h2>Add A New Phone</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className="rounded" {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
                <textarea className="rounded" {...register("description")} placeholder="Description" />
                <input className="rounded" type="number" {...register("price")} placeholder="Price" />
                <input className="rounded" {...register("img")} placeholder="Image url" />
                <input className="btn-color-2 border-0 rounded" type="submit" />
            </form>
        </div>
    );
};

export default AddPhones;