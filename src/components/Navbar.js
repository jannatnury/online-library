import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import wishList from '../assets/images/icons/heart.png';
import search from '../assets/images/icons/magnifying-glass.png';
import cart from '../assets/images/icons/shopping-cart.png';
import login from '../assets/images/icons/login.png';
// import logo from '../assets/images/icons/logo.png';

const Navbar = ({ children }) => {
    return (
        <div>
            <div className=' flex justify-between text-white top-0 bg-green-600 py-3'>
                <h3 className='ml-16'>Hotline: +8801630337656  |  Email: jannatnury253@gmail.com</h3>
                <h3 className='mr-16'>Get Discount | Join Reader Club</h3>
            </div>
            <div className="drawer drawer-end">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {/* <!-- Navbar --> */}
                    <div className="w-full navbar bg-base-100 px-8 top-0 fixed z-50 shadow-md">
                        <div className="flex-1 px-2 mx-2 text-2xl">
                            <Link to="/">Book Store</Link>
                        </div>
                        <div className="flex-none lg:hidden">
                            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>

                        <div className="flex-none hidden lg:block md:mr-44">
                            <ul className="menu menu-horizontal gap-1">
                                {/* <!-- Navbar menu content here --> */}
                                <li><NavLink to="/home">Home</NavLink></li>
                                <li><NavLink to="/books">Books</NavLink></li>
                                <li><NavLink to="/best-sellings">Best Sellings</NavLink></li>
                                <li><NavLink to="/about">About</NavLink></li>
                                <li><NavLink to="/contact">Contact</NavLink></li>
                            </ul>
                        </div>
                        <div className="flex-none hidden lg:block">
                            <ul className="menu menu-horizontal gap-1">
                                <li><NavLink to="/search">
                                    <img src={search} alt="" />
                                </NavLink></li>
                                <li><NavLink to="/wish-list">
                                <sup className='badge bg-red-600 border-none absolute right-2 top'>0</sup>
                                    <img src={wishList} alt="" />
                                </NavLink></li>
                                <li><NavLink to="/cart">
                                <sup className='badge bg-red-600 border-none absolute right-2 top'>0</sup>
                                    <img src={cart} alt="" />
                                </NavLink></li>
                                <li><NavLink to="/login">
                                    <img src={login} alt="" />
                                </NavLink></li>
                            </ul>
                        </div>
                    </div>
                    {/* <!-- Page content here --> */}
                    {children}
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100">
                        {/* <!-- Sidebar content here --> */}
                        <li><NavLink to="/home">Home</NavLink></li>
                        <li><NavLink to="/books">Books</NavLink></li>
                        <li><NavLink to="/best-sellings">Best Sellings</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                        <li><NavLink to="/login">Login</NavLink></li>
                        <li><NavLink to="/search">
                            <img src={search} alt="" />
                        </NavLink></li>
                        <li><NavLink to="/wish-list">
                            <img src={wishList} alt="" />
                        </NavLink></li>
                        <li><NavLink to="/cart">
                            <img src={cart} alt="" />
                        </NavLink></li>
                        <li><NavLink to="/login">
                            <img src={login} alt="" />
                        </NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;