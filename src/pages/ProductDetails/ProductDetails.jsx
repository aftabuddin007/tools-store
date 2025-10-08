import React from 'react';
import { useParams } from 'react-router';
import useProducts from '../../Components/Hooks/useProducts';
import { LuDownload } from "react-icons/lu";
import { FaStar } from "react-icons/fa";
import { BiLike } from "react-icons/bi";






const ProductDetails = () => {
    const {id} = useParams()
    const {products}=useProducts()
    const product = products.find(p=>String(p.id)===id)
    const {image,title,companyName,size,downloads,ratingAvg,reviews} = product ||{}
    return (
        <div className='max-w-7xl mx-auto'>
           <div className="hero bg-base-200 min-h-screen">
  <div className="flex justify-between gap-20 flex-col lg:flex-row border-2-b border-b">
    <img 
      src={image}
      className="h-[250px]   rounded-lg shadow-2xl"
    />
    <div className=''>
      <div className='border-2- border-b'>
        <h1 className="text-5xl font-bold">{title}</h1>
      <p>Developed by {companyName}</p>
      </div>
      <div>
        <div className='flex-col flex justify-between sm:flex-row gap-10 mt-7 mb-10'>
            <div className=''>
                <p className='text-3xl font-semibold text-green-400'><LuDownload /></p>
                <p>Downloads</p>
                <h2 className='text-4xl font-bold'>{downloads}</h2>
            </div>
            <div>
                <p className='text-3xl font-semibold text-yellow-400'><FaStar /></p>
                <p>Average Ratings</p>
                <h2 className='text-4xl font-bold'>{ratingAvg}</h2>
            </div>
            <div>
                <p className='text-3xl font-semibold text-purple-400'><BiLike /></p>
                <p>Total Reviews</p>
                <h2 className='text-4xl font-bold'>{reviews}K</h2>
            </div>
            
        </div>
      </div>
      <button className="btn btn-active btn-success text-[#ffffff] mb-6">Install Now ({size} MB)</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default ProductDetails;