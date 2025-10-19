import React from 'react';
import { Link } from 'react-router';
import { FaGithub } from "react-icons/fa";

const NavBar = () => {
   const links = <>
   <Link to={'/'}><li className='m-2 hover:text-purple-500 hover:underline   p-2 rounded-xl'>Home</li></Link>
   <Link to="/appInfo"><li  className='m-2 hover:text-purple-500 hover:underline   p-2 rounded-xl'>Apps</li></Link>
   <Link to="/installed"><li className='m-2 hover:text-purple-500 hover:underline   p-2 rounded-xl'>Installation</li></Link>
   
   </>

  return (
    <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl font-bold"><img className='max-h-10/12' src="/assets/logo.png" alt="" />HERO.IO</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end gap-3">
    <a className="btn bg-gradient-to-r from-indigo-600 to-purple-500 text-white"><FaGithub />Contribute</a>
    
  </div>
</div>
  );
};

export default NavBar;