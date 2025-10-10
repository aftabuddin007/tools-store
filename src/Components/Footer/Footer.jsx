import React from 'react';
import logo from '../../assets/logo.png'
import { Link } from 'react-router';
const Footer = () => {
    return (
        
        <footer className='max-w-7xl mx-auto'>
    <div className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">        
  <aside>
    
     <Link className='flex'>
            <img src={logo} alt="" className='h-[40px]'/>
    <a className="btn btn-ghost text-xl text-[#632EE3]">HERO.IO</a>
        </Link>
  </aside>
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">App Discovery</a>
    <a className="link link-hover">App Installation</a>
    <a className="link link-hover">App Management</a>
    <a className="link link-hover">Chart Analytics</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Help / FAQ</a>
    
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
  </div>
  <p className='text-center font-bold'>Copyright © 2025 - All right reserved</p>
</footer>
    );
};

export default Footer;