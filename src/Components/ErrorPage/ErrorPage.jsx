import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Error from '../../assets/error-404.png'
import { Link } from 'react-router';
const ErrorPage = () => {
  return (
    <div>
      <Header></Header>
      <div className='flex justify-center mt-10'>
        <img src={Error} alt="" />
      </div>
      <div className='text-center mb-10'>
        <h1 className='text=[#001931] font-bold mb-3 text-3xl md:text-5xl'>Oops, page not found!</h1>
        <p className='text-[#627382] text-sm md:text-xl'>The page you are looking for is not available.</p>
      </div>
      <div className='flex justify-center mb-10'>
        <Link to="/home" className='btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white'>Go Back</Link>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ErrorPage;