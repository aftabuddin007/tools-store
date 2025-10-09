import React, { useState } from 'react';
import useProducts from '../../Components/Hooks/useProducts';
import ProductCard from '../../Components/ProductCard/ProductCard';
import AppError from '../../AllError/AppError';

const Products = () => {
const {products}=useProducts()
const [search,setSearch]=useState('')
const term = search.trim().toLocaleLowerCase()

const searchProduct = term?products.filter(prod=> prod.title.toLocaleLowerCase().includes(term)):products

    return (
        <div className='max-w-7xl mx-auto mt-20 mb-10'>
            <div className='text-center'>
                <h2 className='text-5xl  font-bold mb-4'>Our All Applications</h2>
                <p className='text-[#627382] my-2'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
            <div className='flex justify-between'>
                <p className='text-xl font-semibold'>({searchProduct.length}) Apps Found</p>
            <label className="input">
  <input onChange={s=>setSearch(s.target.value)} type="search" value={search} className='cursor-pointer' placeholder="Search Products" />
</label></div>
            <div className='grid grid-cols-1 place-items-center sm:grid-cols-4 gap-6 '>
                {
                    searchProduct.length >0 ?(searchProduct.map(pro=>(<ProductCard key={pro.id} pro={pro}></ProductCard>))):(<AppError></AppError>)
                }
            </div>
        </div>
    );
};

export default Products;