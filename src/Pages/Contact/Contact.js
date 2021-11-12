import React from 'react';

const Contact = () => {
    return (
        <div>
            <div className="bg-color container my-3 rounded text-white">
                <h1 className="my-4">Contact <span className="text">Us</span></h1>
                <p>Connect with <u className="text">PHONE CORNERS</u> Care</p>
                <p><small><u className="text">Ours selling phones any problem plz contact today</u></small></p>
                <div className="my-4">
                    <input className="mx-4 w-25 border-0 rounded px-2 " type="text" placeholder="First name" />
                    <input className="w-25 border-0 rounded px-2 " type="text" placeholder="Last name" />
                </div>
                <div className="my-4">
                    <input className="mx-4 w-25 border-0 rounded px-2 " type="Email" placeholder="Email" />
                    <input className="w-25 border-0 rounded px-2 " type="Password" placeholder="Password" />
                </div>
                <div className="my-4">
                    <input className="mx-4 w-25 border-0 rounded px-2 " type="text" placeholder="Address" />
                    <input className="w-25 border-0 rounded px-2 " type="text" placeholder="Gender" />
                </div>
                <div>
                    <input className="mx-4 w-25 border-0 rounded px-2 " type="text" placeholder="Device Name" />
                    <input className="w-25 border-0 rounded px-2 " type="text" placeholder="Problem" />
                </div>
                <input className="my-4 px-2 border-0 rounded px-2 " type="text" placeholder="Warranty Date" /> <br />
                <input className=" w-50 px-2 border-0 rounded px-2 " type="text" placeholder="Message" /> <br />
                <button className="btn-color-3 border-0 rounded text-white px-4 py-2 my-4">Submit</button>
            </div>
        </div>
    );
};

export default Contact;