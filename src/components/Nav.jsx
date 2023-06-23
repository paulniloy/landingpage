import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div data-aos="zoom-out" className="navbar flex flex-col">
            <div className="navbar-start">
                <div className='hidden md:block'>
                    <img className='rounded-full w-80' src="https://images.pexels.com/photos/430205/pexels-photo-430205.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                </div>
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost btn-circle visible md:invisible">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <div className=''>
                            <img className='rounded-full w-20' src="https://images.pexels.com/photos/430205/pexels-photo-430205.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                        </div>
                        <Link to={"/"}><p className='transition-all duration-600 ease-in-out hover:bg-blue-600 p-2 rounded-xl hover:text-white'>Home</p></Link>
                        <Link to={"/about"}><p className='transition-all duration-600 ease-in-out hover:bg-blue-600 p-2 rounded-xl hover:text-white'>About</p></Link>
                        <Link to={"/contact"}><p className='transition-all duration-600 ease-in-out hover:bg-blue-600 p-2 rounded-xl hover:text-white'>Contact Us</p></Link>
                        <Link to={"/blog"}><p className='transition-all duration-600 ease-in-out hover:bg-blue-600 p-2 rounded-xl hover:text-white'>Blogs</p></Link>
                    </ul>
                </div>
            </div>
            <div className="navbar-center p-5 flex flex-col invisible gap-10 md:visible">
                <Link to={"/"}><p className='transition-all duration-600 ease-in-out hover:bg-blue-600 p-2 rounded-xl hover:text-white'>Home</p></Link>
                <Link to={"/about"}><p className='transition-all duration-600 ease-in-out hover:bg-blue-600 p-2 rounded-xl hover:text-white'>About</p></Link>
                <Link to={"/contact"}><p className='transition-all duration-600 ease-in-out hover:bg-blue-600 p-2 rounded-xl hover:text-white'>Contact Us</p></Link>
                <Link to={"/blog"}><p className='transition-all duration-600 ease-in-out hover:bg-blue-600 p-2 rounded-xl hover:text-white'>Blogs</p></Link>
            </div>
            {/* <div className="navbar-end">
                <button className="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </button>
                <button className="btn btn-ghost btn-circle">
                    <div className="indicator">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                        <span className="badge badge-xs badge-primary indicator-item"></span>
                    </div>
                </button>
            </div> */}
        </div>
    );
};

export default Nav;