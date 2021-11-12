import React, { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import loginImage from '../../Images/pngegg (8).png';
import './Login.css'



const Login = () => {
    const [loginData, setLoginData] = useState({})

    const { user, authError, loginUser, isLoading } = useAuth()
    console.log(user.email);
    const location = useLocation()
    const history = useHistory()
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        console.log(newLoginData);
        newLoginData[field] = value;
        setLoginData(newLoginData)
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history)
        alert('ok')

        e.preventDefault()
    }
    return (

        <div className="row d-flex justify-content-center align-items-center">
            <div className="col-md-3">
                <img src={loginImage} alt="" />
            </div>
            <div className="col-md-6 size ">
                <h1 className="text m-3">Please Login</h1>
                {!isLoading && <form onSubmit={handleLoginSubmit}>
                    <input className="rounded" type="email" name="email" placeholder="Your Email" onBlur={handleOnChange} />
                    <input className="rounded" type="password" name="password" placeholder="Your Password" onBlur={handleOnChange} />
                    <button className="btn-color text-white rounded px-3 py-2 border-0 w-25 mb-3 mt-1" type="submit">Login</button>
                    <Link className="text" to='/register'>New User? Please Register</Link>
                </form>}
                {isLoading && <Spinner animation="border" variant="info" />}
                {(user?.email) ? <p className="text-info">success</p> : <p></p>}



                {(authError) ? <p className="text-danger">{authError}</p> : <p></p>}



            </div>

        </div>
    );
};

export default Login;
