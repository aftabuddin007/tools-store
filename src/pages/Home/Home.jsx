import React from 'react';
import useProducts from '../../Components/Hooks/useProducts';
import ProductCard from '../../Components/ProductCard/ProductCard';
import { Link, useNavigation } from 'react-router';
import Loading from '../Loading/Loading';

const Home = () => {

    const {products}=useProducts()
    const featuredProduct = products.slice(0,8)
    const navigation = useNavigation();

  const isLoading = navigation.state === "loading";
  console.log(isLoading)
    return (
        isLoading?<Loading></Loading>:<div className='max-w-7xl mx-auto mt-20 '>
            <div className='text-center'>
                <h2 className='text-4xl sm:text-5xl  font-bold mb-4'>Trending Apps</h2>
            <p className='text-[14px] sm:text-xl text-[#627382] my-2'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div  className='grid grid-cols-1 place-items-center sm:grid-cols-4 mt-20 gap-6 '>

                {
                    featuredProduct.map(pro=>(<ProductCard pro={pro}></ProductCard>)) 
                }


            </div>
           <div className='mt-10 text-center'>
             <Link to='/products' className='btn text-[white] bg-[linear-gradient(125deg,#632EE3_5.68%,#9F62F2_88.38%)] rounded-md '>See All</Link>
           </div>
        </div>
    );
};

export default Home;