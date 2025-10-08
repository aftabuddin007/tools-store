import React from 'react';
import { useParams } from 'react-router';
import useProducts from '../../Components/Hooks/useProducts';
import { LuDownload } from "react-icons/lu";
import { FaStar } from "react-icons/fa";
import { BiLike } from "react-icons/bi";
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';






const ProductDetails = () => {
    const {id} = useParams()
    const {products}=useProducts()
    const product = products.find(p=>String(p.id)===id)
    const {image,title,companyName,size,downloads,ratingAvg,reviews,ratings,description} = product ||{}

  const handleInstall=()=>{
    const existingList = JSON.parse(localStorage.getItem('wishlist'))
  }


    return (
        <div className='max-w-7xl mx-auto'>
           <div className=" ">
  <div className="flex  sm:gap-20 flex-col items-center sm:flex-row border-2-b border-b border-gray-300">
    <img 
      src={image}
      className="h-75   rounded-xl shadow-2xl"
    />
    <div className=''>
      <div className='border-2- border-b border-gray-300 mt-15'>
        <h1 className="text-5xl font-bold">{title}</h1>
      <p>Developed by {companyName}</p>
      </div>
      <div>
        <div className='flex-col flex justify-between sm:flex-row gap-10 mt-7 mb-10'>
            <div className=''>
                <p className='text-3xl font-semibold text-green-400'><LuDownload /></p>
                <p>Downloads</p>
                <h2 className='text-4xl font-bold'>{downloads}M</h2>
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
      <button onClick={()=>handleInstall()} className="btn btn-active btn-success text-[#ffffff] mb-6">Install Now ({size} MB)</button>
    </div>
  </div>
  
</div>
{/* rechart option */}
<div className='space-y-3 mt-6'>
  <h3 className='text-xl font-bold'>Ratings</h3>
  <div className='bg-base-100 border-2- border-b border-gray-300 p-4 h-80'>
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        
        data={ratings || []}
        
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name"/>
        <YAxis  />
        <Tooltip />
        <Legend />
        
        <Bar dataKey="count"  fill="#82ca9d"  />
      </BarChart>
    </ResponsiveContainer>
    {/* <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={ratings || []}
        layout="vertical" // ✅ makes it horizontal
        margin={{ top: 10, right: 50, left: 50, bottom: 10 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type="number" />
        <YAxis type="category" dataKey="name" width={80} />
        <Tooltip />
        <Legend />
        <Bar
          dataKey="count"
          fill="#FF7A00" // ✅ bright orange
          barSize={30}
          radius={[0, 8, 8, 0]} // rounded right corners
          label={{
            position: 'right', // ✅ value label at end of bar
            fill: '#fff',
            backgroundColor: '#FF4C00',
            fontWeight: 'bold',
            fontSize: 14,
          }}
        />
      </BarChart>
    </ResponsiveContainer> */}

  </div>
  
   </div>
<div className='space-y-3 mt-10'>
  <h3 className='text-xl font-bold'>Description</h3>
  <div className='bg-base-100   p-4 h-80'>
<p>{description}</p>



  </div>
        </div>
        </div>
    );
};

export default ProductDetails;