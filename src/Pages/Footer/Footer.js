import React from 'react';

const Footer = () => {
    return (
        <div className="bg-color">
            <div className="mt-5 ">
                <div className="row">
                    <div className="col-md-4">
                        <h2>Contact Details</h2>
                        <p>250 Main Street, Brooklyn, NY 52143, US</p>
                        <h4> Tell (800)-456-789</h4>
                        <h5> Email :phonecorner@gmail.com</h5>
                        <h6>Website: phoneCorner.com</h6>
                    </div>
                    <div className="col-md-4">
                        <h2>Useful Links</h2>
                        <h5>All Vendors</h5>
                        <h6>Home 1</h6>
                        <h6>Home 2</h6>
                        <h6>Home 3</h6>
                        <h5>Pricing Plan</h5>
                    </div>

                    <div className="col-md-4">

                        <h3>Help Center</h3>
                        <hr />
                        <h3>Community</h3>
                        <hr />
                        <h3>FAQ</h3>
                    </div>
                </div>

            </div>
            <p className="mt-5">&copy; 2021 <u>Phone Corner</u> Designed By SK</p>
        </div>
    );
};

export default Footer;