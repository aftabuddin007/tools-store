import React from 'react';
import { FaGooglePlay } from "react-icons/fa6";
import { FaAppStoreIos } from "react-icons/fa";
import hero from '../../assets/hero.png'
import HeroBanner from '../HeroBanner/HeroBanner';
import Home from '../Home/Home';
const Banner = () => {
    return (
     <div >
        <div className="hero bg-base-200 ">
  <div className="hero-content text-center">
    <div className="">
      <h1 className="text-5xl font-bold text-[#001931]">We Build <br /><span className='text-[#632EE3]'>Productive</span> Apps</h1>
      <p className="py-6 text-[#627382]">
        At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br /> Our goal is to turn your ideas into digital experiences that truly make an impact.
      </p>
      <div className=' mb-8'>
              <button className="btn mr-4"><FaGooglePlay />Google Play</button>
      <button className="btn "><FaAppStoreIos />
App Store</button>
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