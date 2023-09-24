import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Header/Navbar';

const MainLayout = () => {
  return (
    <div className="max-w-[1250px] mx-auto">
      <Navbar></Navbar>
      <div className='py-10'>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MainLayout;