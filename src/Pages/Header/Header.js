import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../Images/pngegg (8).png'
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div className="bg-color">
            <div className="header d-lg-flex align-items-center justify-content-evenly">
                <div className="d-flex">
                    <img className="site-logo" src={logo} alt="" />
                    <h1>Phone <span className="text">Corner</span></h1>
                </div>
                <Link to="/home" className="items">Home</Link>
                <Link to="/products" className="items">Products</Link>
                <Link to="/explore" className="items">Explore</Link>
                <Link to="/reviews" className="items">Reviews</Link>
                <Link to="/dashboard" className="items">DashBoard</Link>
                <h3><span className="text">{user?.displayName}</span></h3>
                {user?.email ? <button onClick={logOut} className=" btn-color-3 text-white rounded px-2  border-0">Log Out</button> : <Link to="/login" className="items">Log In</Link>}


            </div>
        </div>
    );
};

export default Header;