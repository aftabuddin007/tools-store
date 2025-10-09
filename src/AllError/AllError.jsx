import React from 'react';
import err1  from '../../src/assets/error-404.png'
import { useNavigate } from 'react-router';
const AllError = () => {
  const navigate = useNavigate();
  const handleBack = ()=>{
    navigate(-1)
  }




  
    return (
        <div>
          <div className="card bg-base-100  shadow-sm">
  <figure className="px-10 pt-10">
    <img
      src={err1}
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-4xl font-bold">Oops, page not found!</h2>
    <p>The page you are looking for is not available.</p>
    <div className="card-actions">
      <button onClick={()=>handleBack()} className="btn btn-primary">Go Back!</button>
    </div>
  </div>
</div>  
        </div>
    );
};

export default AllError;