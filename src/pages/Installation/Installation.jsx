import React, { useEffect, useState } from 'react';
import AllError from '../../AllError/AllError';
import AppError from '../../AllError/AppError';
import { FaDownload } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";

const Installation = () => {

    const [installList,setInstallList]=useState([])

useEffect(()=>{
    const saveList = JSON.parse(localStorage.getItem('wishlist'))
        if(saveList)setInstallList(saveList)

},[])
    if(!installList.length) return (<AppError></AppError>)


const handleRemove =  id =>{
     const existingList = JSON.parse(localStorage.getItem('wishlist'))
        
      let updatedList = existingList.filter(p=>p.id !== id)
        // for ui update prev=>prev.filter(p=>p.id!==id)
        setInstallList(updatedList)

        localStorage.setItem('wishlist',JSON.stringify(updatedList))
    }





    return (
        <div>
            <div className='max-w-7xl mx-auto mt-20 mb-10 bg-[#F5F5F5]'>
            <div className='text-center'>
                <h2 className='text-5xl  font-bold mb-4'>Your Installed Apps</h2>
                <p className='text-[#627382] my-2'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className='flex justify-between'>
                {installList.length} Apps Found
            <select defaultValue="Small" className="select select-sm">
  <option disabled={true}>Small</option>
  <option>Small Apple</option>
  <option>Small Orange</option>
  <option>Small Tomato</option>
</select></div>

        <div>
            {
                installList.map(p=>((<div className='flex justify-between px-10 items-center  p-3 bg-[#ffffff] mb-3'>
                <div className=' flex gap-4 items-center'>
                <img className='h-[100px]' src={p.image} alt="" />
                <div>
                    <p className='text-xl font-bold mb-6'>{p.title}</p>
                <div className='flex gap-5 text-[7px] sm:text-xl '>
                    <p className='flex items-center text-green-400'><FaDownload />
 {p.downloads}M</p>
                    <p className='flex items-center text-yellow-400'><FaStar />
{p.ratingAvg}</p>
                    <p className='text-gray-400'>{p.size} MB</p>
                </div>
                </div>

                </div>
                <div className='flex gap-10'>
                    
                    <button onClick={()=>handleRemove(p.id)} className='btn  btn-accent'>Delete</button>
                </div></div>)))
            }
        </div>

        </div>
        </div>
    );
};

export default Installation;



{/* <AllError></AllError> */}
        {/* <AppError></AppError> */}