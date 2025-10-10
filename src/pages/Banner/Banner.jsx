import React from 'react';
import { FaGooglePlay } from "react-icons/fa6";
import { FaAppStoreIos } from "react-icons/fa";
import hero from '../../assets/hero.png'
import HeroBanner from '../HeroBanner/HeroBanner';
import Home from '../Home/Home';
import { Link, Links } from 'react-router';
const Banner = () => {
    return (
     <div >
        <div className="hero bg-base-200 ">
  <div className="hero-content text-center overflow-x-hidden">
    <div className="">
      <h1 className="text-5xl font-bold text-[#001931]">We Build <br /><span className='text-[#632EE3]'>Productive</span> Apps</h1>
      <p className="py-6 text-[#627382]">
        At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br /> Our goal is to turn your ideas into digital experiences that truly make an impact.
      </p>
      <div className=' mb-8'>
              <Link to='https://play.google.com/store/games?hl=en' className="btn mr-4 text-[white] bg-[linear-gradient(125deg,#632EE3_5.68%,#9F62F2_88.38%)]"><FaGooglePlay />Google Play</Link>
      <Link to='https://www.apple.com/app-store/' className="btn text-[white] bg-[linear-gradient(125deg,#632EE3_5.68%,#9F62F2_88.38%)]"><FaAppStoreIos />
App Store</Link>
    </div>
    <img src={hero} alt="" /> 
    </div>
    
  </div>
</div>

<HeroBanner></HeroBanner>
<Home></Home>
     </div>

    )
};

export default Banner;