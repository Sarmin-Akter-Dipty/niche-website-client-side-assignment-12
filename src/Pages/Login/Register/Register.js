import React, { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import loginImage from '../../Images/pngegg (8).png'
import './Register.css'

const Register = () => {
    const [loginData, setLoginData] = useState({})
    const location = useLocation()
    const history = useHistory()

    const { user, authError, registerUser, isLoading } = useAuth()
    console.log(user.email);
    const handleOnChange = e => {

        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        console.log(newLoginData);
        setLoginData(newLoginData)
    }
    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your password did not match')
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, location, history)
        alert('Your Register Successfully Added')
        e.preventDefault()
    }
    return (
        <div className="row d-flex justify-content-center align-items-center">

            <div className="col-md-6  size">
                <h1 className="text m-3">Please Register</h1>
                {!isLoading && <form onSubmit={handleLoginSubmit}>
                    <input className="rounded" type="text" name="name" placeholder="Your Name" onBlur={handleOnChange} />
                    <input className="rounded" type="email" name="email" placeholder="Your Email" onBlur={handleOnChange} />
                    <input className="rounded" type="password" name="password" placeholder="Your Password" onBlur={handleOnChange} />
                    <input className="rounded" type="password" name="password2" placeholder="ReType Your Password" onBlur={handleOnChange} />
                    <button className="btn-color text-white rounded px-3 py-2 border-0 w-25 mb-3 mt-1" type="submit">Register</button>
                    <Link className="text" to='/login'>Already register!!please login</Link>
                </form>}
                {isLoading && <Spinner animation="border" variant="info" />}
                {(user?.email) ? <p className="text-primary">success</p> : <p></p>}

                {(authError) ? <p className=" text-danger">{authError}</p> : <p></p>}
            </div>
            <div className="col-md-6 margin">
                <img src={loginImage} alt="" />
            </div>


        </div>
    );
};

export default Register;