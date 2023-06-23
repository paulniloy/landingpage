import React from 'react';
import Nav from './Nav';
import { Outlet } from 'react-router-dom';

const Container = () => {
    return (
        <div className='flex'>
            <div className='min-h-screen bg-indigo-200'>
                <Nav></Nav>
            </div>
            <div className='w-full'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Container;