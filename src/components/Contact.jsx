import React from 'react';

const Contact = () => {
    const handlesubmit = (event)=> {
        event.preventdefault();
        event.target.reset();
    }
    return (
        <div data-aos="zoom-out" className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handlesubmit}>
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="name*" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">email</span>
                                </label>
                                <input type="text" placeholder="email*" className="input input-bordered" />
                                <label className="label">
                                    
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Contact</span>
                                </label>
                                <input type="number" placeholder="phone number*" className="input input-bordered" />
                                <label className="label">
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Send Message</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;