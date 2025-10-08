import React from 'react';

const Installation = () => {
    return (
        <div>
            <div className='max-w-7xl mx-auto mt-20 mb-10'>
            <div className='text-center'>
                <h2 className='text-5xl  font-bold mb-4'>Your Installed Apps</h2>
                <p className='text-[#627382] my-2'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className='flex justify-between'>
                2 Apps Found
            <select defaultValue="Small" className="select select-sm">
  <option disabled={true}>Small</option>
  <option>Small Apple</option>
  <option>Small Orange</option>
  <option>Small Tomato</option>
</select></div>
        </div></div>
    );
};

export default Installation;