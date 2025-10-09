import React from 'react';
import logo from '../../assets/logo.png'
import { Link, NavLink} from 'react-router';
import { FaGithubSquare } from "react-icons/fa";
import Loading from '../../pages/Loading/Loading';
// import { useNavigation } from 'react-router';
const Header = () => {

const navlinkClass = ({isActive})=>
  isActive?'text-[#632EE3] underline font-bold':'hover:text-[#632EE3] hover:underline';





    return (
        <div className='max-w-7xl mx-auto shadow-sm'>
          <div className="navbar bg-base-100 ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
       <NavLink to='/' className={navlinkClass}><a >Home</a></NavLink>
      <NavLink to='/products' className={navlinkClass}><a >Apps</a></NavLink>
      
      <NavLink to='/install' className={navlinkClass}><a >Installation</a></NavLink>
      </ul>
    </div>
    <div className='flex'>
        <Link to='/'>  <img src={logo} alt="" className='h-[40px]'/></Link>
<Link to='/' className="btn btn-ghost text-xl text-[#632EE3] font-semibold">HERO.IO</Link>
    </div>
    
  </div>
  <div className="navbar-center hidden lg:flex  ">
    <ul className="menu menu-horizontal px-1 gap-3 text-xl font-semibold">
      <NavLink to='/' className={navlinkClass}><a >Home</a></NavLink>
      <NavLink to='/products' className={navlinkClass}><a >Apps</a></NavLink>
      
      <NavLink to='/install' className={navlinkClass}><a >Installation</a></NavLink>
    </ul>
  </div>
  <div className="navbar-end ">
    
    <Link to='https://github.com/aftabuddin007' className="btn text-[white] bg-[linear-gradient(125deg,#632EE3_5.68%,#9F62F2_88.38%)]
"><FaGithubSquare /> Contribute</Link>
  </div>
</div>
        </div>
    );
};

export default Header;