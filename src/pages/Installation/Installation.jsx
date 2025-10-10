import React, { useEffect, useState } from 'react';
import AllError from '../../AllError/AllError';
import AppError from '../../AllError/AppError';
import { FaDownload } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { toast } from 'react-toastify';
// import { toast } from 'react-toastify';

const Installation = () => {

    const [installList,setInstallList]=useState([])
    const [sortOrder,setSortOrder]=useState('none')
useEffect(()=>{
    const saveList = JSON.parse(localStorage.getItem('wishlist'))
        if(saveList)setInstallList(saveList)

},[])
    if(!installList.length) return (<AppError></AppError>)

const sortItem = (()=>{
    if(sortOrder ==='downloads-asc'){
        return [...installList].sort((a,b)=>a.downloads - b.downloads)
    }else if(
        sortOrder === 'downloads-desc'
    ){
        return [...installList].sort((a,b)=>b.downloads - a.downloads)
    }else{
        return installList
    }
})()






const handleRemove =  id =>{
     const existingList = JSON.parse(localStorage.getItem('wishlist'))
        
      let updatedList = existingList.filter(p=>p?.id !== id)
        
        setInstallList(updatedList)

        localStorage.setItem('wishlist',JSON.stringify(updatedList))
        return toast('Uninstalled Successful  ')
    }





    return (
        <div>
            <div className='max-w-7xl mx-auto mt-20 mb-10 bg-[#F5F5F5]'>
            <div className='text-center'>
                <h2 className='text-5xl  font-bold mb-4'>Your Installed Apps</h2>
                <p className='text-[#627382] my-2'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className='flex justify-between text-[14px] sm:text-xl font-semibold'>
                {installList.length} Apps Found
            <select Value={sortOrder} onChange={s=>setSortOrder(s.target.value)} defaultValue='Sort' className="select select-sm">
  <option disabled={true}>Sort</option>
  <option value='none'>Sort By Downloads</option>
  <option value='downloads-asc'>Low &gt; High</option>
  <option value='downloads-desc'>High &gt; Low</option>
</select></div>

        <div>
            {
                sortItem?.map(p=>(<div className='flex justify-between sm:px-10 items-center  p-3 bg-[#ffffff] mb-3'>
                <div className=' flex gap-4 items-center'>
                <img className='h-[100px]' src={p?.image} alt="" />
                <div>
                    <p className='text-xl font-bold mb-6'>{p?.title}</p>
                <div className='flex gap-5 text-[9px] sm:text-xl '>
                    <p className='flex items-center text-green-400'><FaDownload />
 {p?.downloads}M</p>
                    <p className='flex items-center text-yellow-400'><FaStar />
{p?.ratingAvg}</p>
                    <p className='text-gray-400'>{p?.size} MB</p>
                </div>
                </div>

                </div>
                <div className='flex gap-10'>
                    
                    <button onClick={()=>handleRemove(p?.id)} className='btn  btn-accent'>Uninstall</button>
                </div></div>))
            }
        </div>

        </div>
        </div>
    );
};

export default Installation;



{/* <AllError></AllError> */}
        {/* <AppError></AppError> */}