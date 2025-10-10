import React, {  useEffect, useState } from 'react';
import {  useParams } from 'react-router';
import useProducts from '../../Components/Hooks/useProducts';
import { LuDownload } from "react-icons/lu";
import { FaStar } from "react-icons/fa";
import { BiLike } from "react-icons/bi";
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { toast} from 'react-toastify';
import AppError from '../../AllError/AppError';






const ProductDetails = () => {
    const {id} = useParams()



    const {products}=useProducts()
    const product = products.find(p=>String(p.id)=== id)
  console.log(product)


    const {image,title,companyName,size,downloads,ratingAvg,reviews,ratings,description} = product ||{}
   

  // const [install,setInstall]=useState(false)

  // const handleInstall=()=>{
  //   setInstall(true)
  //    const existingList = JSON.parse(localStorage.getItem('wishlist'))
  //     let updatedList = []
  //       if(existingList){
  //         // const isDuplicated = existingList.some(p=>p.id === product.id)
          
          
  //          updatedList = [...existingList,product]
  //       }else{
  //         updatedList.push(product)
  //       }

            
      

  //   localStorage.setItem('wishlist',JSON.stringify(updatedList))
  // return toast ("Your Application is add the Installations")
  // }
const [install, setInstall] = useState(false);

useEffect(() => {
  
  const existingList = JSON.parse(localStorage.getItem('wishlist')) || [];
  const isInstalled = existingList.some(p => p.id === product?.id);
  if (isInstalled) {
    setInstall(true);
  }
}, [product]);

const handleInstall = () => {
  setInstall(true);

  const existingList = JSON.parse(localStorage.getItem('wishlist')) || [];
  const isDuplicated = existingList.some(p => p.id === product.id);

  if (!isDuplicated) {
    const updatedList = [...existingList, product];
    localStorage.setItem('wishlist', JSON.stringify(updatedList));
  }

  toast("Your application has been added to installations");
};












    return (
        product?<div className='max-w-7xl mx-auto'>
           <div className=" ">
  <div className="flex  sm:gap-20 flex-col items-center sm:flex-row border-2-b border-b border-gray-300">
    <img 
      src={image}
      className="h-75   rounded-xl shadow-2xl"
    />
    <div className=''>
      <div className='border-2- border-b border-gray-300 mt-15'>
        <h1 className="text-5xl font-bold mb-3">{title}</h1>
      <p className='mb-3 text-[#627382]'>Developed by <span className='text-[#632EE3] font-bold'>{companyName}</span></p>
      </div>
      <div>
        <div className='flex-col flex justify-between sm:flex-row gap-10 mt-7 mb-10'>
            <div className=''>
                <p className='text-3xl font-semibold text-green-400'><LuDownload /></p>
                <p className='text-[#627382]'>Downloads</p>
                <h2 className='text-4xl font-bold'>{downloads}M</h2>
            </div>
            <div>
                <p className='text-3xl font-semibold text-yellow-400'><FaStar /></p>
                <p className='text-[#627382]'>Average Ratings</p>
                <h2 className='text-4xl font-bold'>{ratingAvg}</h2>
            </div>
            <div>
                <p className='text-3xl font-semibold text-purple-400'><BiLike /></p>
                <p className='text-[#627382]'>Total Reviews</p>
                <h2 className='text-4xl font-bold'>{reviews}K</h2>
            </div>
            
        </div>
      </div>
      <button onClick={()=>handleInstall()} disabled={install} className="btn btn-active btn-success  text-[#ffffff] mb-6 disabled:!bg-green-700">{install?'Installed':`Install Now (${size} MB)`}</button>
    </div>
  </div>
  
</div>
{/* rechart option */}
<div className='space-y-3 mt-6'>
  <h3 className='text-2xl font-bold'>Ratings</h3>
  <div className='bg-base-100 border-2- border-b border-gray-300 p-4 h-80'>
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        
        data={ratings || []}
        layout="vertical"
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type="number"/>
        <YAxis type="category" dataKey="name" />
        <Tooltip />
        <Legend />
        
        <Bar dataKey="count"  fill="#FF7A00"   />
      </BarChart>
    </ResponsiveContainer>
    
  </div>
  
   </div>
<div className='space-y-3 mt-10'>
  <h3 className='text-2xl font-bold'>Description</h3>
  <div className='bg-base-100 text-[#627382]  p-4 h-80'>
<p>{description}</p>



  </div>
        </div>
        </div>:<AppError></AppError>
    );
    
};

export default ProductDetails;