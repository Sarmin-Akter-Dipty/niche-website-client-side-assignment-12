import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css'
import banner from '../Images/Banner1.jpg'

const Banner = () => {
    return (
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active ">
                    <img src={banner} class="w-100 hight" alt="..." />

                    <div className="carousel-caption d-none d-md-block">

                        <Link to="/home"><button className=" text border-0 rounded px-4 py-1 ">CONTACT US</button>
                        </Link>


                    </div>

                </div>

            </div>
        </div>
    );
};

export default Banner;