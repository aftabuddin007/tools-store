import React from 'react';
import useProducts from '../../Components/Hooks/useProducts';
import ProductCard from '../../Components/ProductCard/ProductCard';

const Products = () => {
const {products}=useProducts()
    return (
        <div className='max-w-7xl mx-auto mt-20 mb-10'>
            <div className='text-center'>
                <h2 className='text-5xl  font-bold mb-4'>Our All Applications</h2>
                <p className='text-[#627382] my-2'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
            <div className='flex justify-between'>
                <p className='text-xl font-semibold'>({products.length}) Apps Found</p>
            <label className="input">
  <input type="search"  placeholder="Search Products" />
</label></div>
            <div className='grid grid-cols-1 place-items-center sm:grid-cols-4 gap-6'>
                {
                    products.map(pro=>(<ProductCard pro={pro}></ProductCard>))
                }
            </div>
        </div>
    );
};

export default Products;