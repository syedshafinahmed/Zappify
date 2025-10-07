import React from 'react';
import { useLoaderData } from 'react-router';
import Download from '../../assets/icon-downloads.png';
import Review from '../../assets/icon-review.png';
import Rating from '../../assets/icon-ratings.png'
const AppDetails = () => {
  const data = useLoaderData();
  if (!data) {
    return (
      <div className='flex flex-col items-center justify-center h-screen'>
        <h1 className='text-4xl font-bold mb-4'>App Not Found</h1>
        <p className='mb-6'>The app you are looking for does not exist.</p>
        <Link to='/home' className='btn btn-primary'>Go Back Home</Link>
      </div>
    );
  }
  return (
    <div className='bg-gray-200 py-20'>
      <div className='max-w-7xl mx-auto px-20'>
        <div className='flex gap-x-15 items-center'>
          <img className='h-90' src={data.image} alt="" />
          <div>
            <div>
              <p className='text-[#001931] font-bold text-4xl'>{data.title}</p>
              <p className='font-semibold text-xl mt-3'>Developed by <span className='text-[#632EE3]'>{data.companyName}</span></p>
            </div>
            <div className='flex gap-x-10 text-[#001931] py-10'>
              <div className='flex flex-col items-center'>
                <img src={Download} alt="" />
                <p>Downloads</p>
                <h1 className='font-black text-3xl'>{data.downloads}</h1>
              </div>
              <div className='flex flex-col items-center'>
                <img src={Rating} alt="" />
                <p>Average Ratings</p>
                <h1 className='font-black text-3xl'>{data.ratingAvg}</h1>
              </div>
              <div className='flex flex-col items-center'>
                <img src={Review} alt="" />
                <p>Total Reviews</p>
                <h1 className='font-black text-3xl'>{data.reviews}</h1>
              </div>
            </div>
            <button className='btn bg-[#00D390] text-white'>Install Now ({data.size})</button>
          </div>
        </div><br />
        <div>
          {/* graph */}
        </div><br />
        <p className='text-[#001931] font-semibold text-2xl'>Description</p><br />
        <p className='text-[#627382] font-xl text-justify'>{data.description}</p>
      </div>
    </div>
  );
};

export default AppDetails;