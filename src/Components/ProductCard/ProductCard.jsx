import React from 'react';
import { FaStar } from "react-icons/fa";
import { PiDownloadSimpleBold } from "react-icons/pi";
import { Link } from 'react-router';

const ProductCard = ({pro}) => {
    const {image,title,ratingAvg,downloads,id}=pro
    return (
        <Link to={`/productDetail/${id}`} key={pro.id} className='shadow-lg rounded-md hover:scale-105 transition ease-in-out cursor-pointer'>
            <div className="    p-4">
  <figure className="h-[250px] w-[250px] p-3 bg-gray-300 ">
    <img
      src={image}
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className=" ">
    <h2 className="text-xl font-semibold mb-2">Name: {title}</h2>
    
    <div className="flex justify-between">
        <p className="px-2 py-1 text-green-400 bg-[#F1F5E8] flex items-center gap-2"><PiDownloadSimpleBold />{downloads}M</p>
      <p className="px-2 py-1 text-yellow-400 bg-[#F1F5E8] flex items-center gap-2"><FaStar />{ ratingAvg}</p>
      
    </div>
  </div>
</div>
        </Link>
    );
};

export default ProductCard;