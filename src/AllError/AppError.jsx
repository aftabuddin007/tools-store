import React from 'react';
import appErr from '../assets/App-Error.png'
import { useNavigate } from 'react-router';
const AppError = () => {
const navigate = useNavigate()
const handleBack = ()=>{
  navigate(-1)
}



    return (
        <div className=''>
              <div className="card bg-base-100  shadow-sm">
             <figure className="px-10 pt-10">
               <img
                 src={appErr}
                 alt="Shoes"
                 className="rounded-xl" />
             </figure>
             <div className="card-body items-center text-center">
               <h2 className="card-title text-4xl font-bold">OPPS!! APP NOT FOUND</h2>
               <p>The App you are requesting is not found on our system.  please try another apps</p>
               <div className="card-actions">
                 <button onClick={()=>handleBack()} className="btn btn-primary">Go Back</button>
               </div>
             </div>
           </div>  
        </div>
    );
};

export default AppError;