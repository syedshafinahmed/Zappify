import React from 'react';
import Logo from '../../assets/logo.png'
import { Link, NavLink } from 'react-router';
import '../Header/Header.css'
import Banner from '../Banner/Banner';
import Home from '../Home/Home';
const Header = () => {
    const links =
        <>
            <nav className='font-medium'>
                <NavLink to='/home' className='m-3'>Home</NavLink>
                <NavLink to='/apps' className='m-3'>Apps</NavLink>
                <NavLink to='/installation' className='m-3'>Installation</NavLink>
            </nav>
        </>
    return (
        <div className='max-w-7xl mx-auto'>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <Link to='/home' className='flex items-center gap-x-2'><img className='h-10' src={Logo} alt="" /><p className='bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text font-bold text-3xl'>Zappify</p></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a href='https://github.com/syedshafinahmed' target="_blank" className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white"><span className='flex items-center gap-x-2'><i class="fa-brands fa-github"></i><p>Contribute</p></span></a>
                </div>
            </div>

        </div>
    );
};

export default Header;