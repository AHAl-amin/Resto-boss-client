import React from 'react';
import { FaAd, FaCalendar, FaHome, FaList, FaSearch, FaShoppingCart } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';

const DashBoard = () => {
    return (
        <div className='flex'>
            {/* dashboard site bar */}
            <div className='w-64 min-h-screen bg-orange-300'>
                <ul className='menu'>
                    <li>
                        <NavLink to="/dashboard/userHome">
                           <FaHome></FaHome>
                           User Home
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/dashboard/Reservation">
                            <FaCalendar></FaCalendar>
                    
                           Reservation
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/dashboard/cart">
                            <FaShoppingCart></FaShoppingCart>
                            My cart
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/review">
                            <FaAd></FaAd>
                            Review
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/bookings">
                            <FaList></FaList>
                          My Bookings
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/">
                           <FaHome></FaHome>
                           Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/order/salad">
                          <FaSearch></FaSearch>
                           Menu
                        </NavLink>
                    </li>
                </ul>
            </div>
            {/* dashboard content */}
            <div className='flex-1 p-8'>
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default DashBoard;