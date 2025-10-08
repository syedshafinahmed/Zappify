import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Invalidapp from '../../assets/App-Error.png'
import { Link } from 'react-router';

const InvalidApp = () => {
  return (
    <div>
      <div className='flex justify-center mt-10'>
        <img className='mb-10' src={Invalidapp} alt="" />
      </div>
      <div className='text-center mb-10'>
        <h1 className='text=[#001931] font-bold mb-3 text-3xl md:text-5xl'>Oops!!! App not found!</h1>
        <p className='text-[#627382] text-sm md:text-xl'>The App you are requesting is not found on our system.  please try another app.</p>
      </div>
      <div className='flex justify-center mb-10'>
        <Link to="/home" className='btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white'>Go Back</Link>
      </div>
    </div>
  );
};

export default InvalidApp;