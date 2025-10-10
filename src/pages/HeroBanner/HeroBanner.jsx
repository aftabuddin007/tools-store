import React from 'react';

const HeroBanner = () => {
    return (
        
        <div className=' '>
           
           <div className='bg-[linear-gradient(125deg,#632EE3_5.68%,#9F62F2_88.38%)] py-10  mt-[-16px] overflow-x-hidden'>
           <div className=' text-[#ffffff]  text-center overflow-x-hidden    sm:w-4xl sm:mx-auto'>
            <h2 className='sm:text-5xl font-bold mb-8'>Trusted by Millions, Built for You</h2>
            <div className='flex-col sm:flex justify-between sm:flex-row '>
                <div className='mb-3 '>
                    <p className='text-[10px] sm:text-[16px]'>Total Downloads</p>
                    <h1 className='text-2xl sm:text-6xl font-bold'>29.6M</h1>
                    <p className='text-[10px] sm:text-[16px]'>21% more than last month</p>
                </div>
                
                <div className='mb-3'>
                    <p className='text-[10px] sm:text-[16px]'>Total Reviews</p>
                    <h1 className='text-2xl sm:text-6xl font-bold'>906K</h1>
                    <p className='text-[10px] sm:text-[16px]'> 46% more than last month</p>
                </div>
                
                <div >
                    <p className='text-[10px] sm:text-[16px]'>Active Apps</p>
                    <h1 className='text-2xl sm:text-6xl font-bold'>132+</h1>
                    <p className='text-[10px] sm:text-[16px]'>31 more will Launch</p>
                </div>
                
            </div>
        </div>
        </div></div>
        
    );
    
};

export default HeroBanner;