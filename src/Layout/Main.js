import React from 'react';
import Navber from '../pages/shared/Navber/Navber';
import Footer from '../pages/shared/Footer/Footer';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
        <Navber></Navber>
        <Outlet></Outlet>
        <Footer></Footer>
            
        </div>
    );
};

export default Main;