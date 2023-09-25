import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../Components/Header/Navbar';

const MainLayout = () => {


  const loc = useLocation()
  console.log(loc);

  useEffect(() => {
    console.log(loc.pathname);

    if (loc.pathname === '/') {
      document.title = `Phone Shop -home`
    } else {
          document.title = `Phone Shop ${loc.pathname.replace("/", "-")}`;

    }

    if (loc.state) {
      document.title = `Phone Shop -${loc.state}`;
    }


  },[loc.pathname])

  return (
    <div className="max-w-[1250px] mx-auto">
      <Navbar></Navbar>
      <div className='py-10'>
        <Outlet context={'ami outlet global context'}></Outlet>
      </div>
    </div>
  );
};

export default MainLayout;