import React, { useState } from 'react';
import adminimage from '../../Images/images (1).jpg'

const MakeAdmin = () => {
    const [email, setEmail] = useState('')
    const [success, setSuccess] = useState(false)
    const handleOnBlur = e => {
        setEmail(e.target.value)
    }
    const handleAdminSubmit = e => {
        const user = { email }
        console.log(user);
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)

        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    setEmail('')
                    setSuccess(true)
                }

            })
        e.preventDefault()
    }
    return (
        <div>
            <div>
                <h2 className="text">Make An Admin</h2>
                <form onSubmit={handleAdminSubmit}>
                    <input className="rounded w-25 " type="email" name="email" placeholder="Your Email" onBlur={handleOnBlur} />
                    <button className="btn-color text-white rounded px-2 py-1 border-0 mb-3 mt-2 mx-2" type="submit">Make Admin</button>
                </form>
                {success && alert('Make Admin Successfully')}
            </div>
            <div >
                <img src={adminimage} alt="" />
            </div>

        </div>
    );
};

export default MakeAdmin;