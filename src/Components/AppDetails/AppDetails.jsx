import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import Download from '../../assets/icon-downloads.png';
import Review from '../../assets/icon-review.png';
import Rating from '../../assets/icon-ratings.png'
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { Bounce, toast, ToastContainer } from 'react-toastify';
const AppDetails = () => {
  const data = useLoaderData();
  const [clicked, setClicked] = useState(false);
  const handleInstall = () => {
    setClicked(true);
    const existing = JSON.parse(localStorage.getItem("installedApps")) || [];
    if (!existing.includes(data.id)) {
      existing.push(data.id);
      localStorage.setItem("installedApps", JSON.stringify(existing));
      // toast(`${data.title} installed successfully!`);
      toast.success(`${data.title} installed successfully`, {
        position: "top-center",
        autoClose: 2000,
        transition: Bounce,
      });
    }
    else {
      // toast(`${data.title} is already installed!`);
      toast.error(`${data.title} is already installed!`, {
        position: "top-center",
        autoClose: 2000,
        transition: Bounce,
      });
    }
  }
  return (
    <div className='bg-gray-200 py-20'>
      <div className='max-w-7xl mx-auto px-20'>
        <div className='flex flex-col md:flex-row gap-x-15 items-center'>
          <img className='h-70 md:h-90 mb-5 md:mb-5' src={data.image} alt="" />
          <div>
            <div>
              <p className='text-[#001931] font-bold text-4xl'>{data.title}</p>
              <p className='font-semibold text-xl mt-3'>Developed by <span className='text-[#632EE3]'>{data.companyName}</span></p>
            </div>
            <div className='flex gap-x-10 text-[#001931] py-10'>
              <div className='flex flex-col items-center'>
                <img src={Download} alt="" />
                <p className='text-xs md:text-base py-1'>Downloads</p>
                <h1 className='font-black text-3xl'>{data.downloads}</h1>
              </div>
              <div className='flex flex-col items-center'>
                <img src={Rating} alt="" />
                <p className='text-xs md:text-base py-1'>Average Ratings</p>
                <h1 className='font-black text-3xl'>{data.ratingAvg}</h1>
              </div>
              <div className='flex flex-col items-center'>
                <img src={Review} alt="" />
                <p className='text-xs md:text-base py-1'>Total Reviews</p>
                <h1 className='font-black text-3xl'>{data.reviews}</h1>
              </div>
            </div>
            <button onClick={handleInstall} disabled={clicked} className={`btn ${clicked ? 'bg-gray-900' : 'bg-[#00D390]'} text-white`}>{clicked ? 'Installed' : `Install Now (${data.size})`}</button>
            <ToastContainer></ToastContainer>
          </div>
        </div><br />
        <div>
          <p className='text-[#001931] font-semibold text-2xl mt-7'>Ratings</p><br />
          <div className='px-0 md:px-10'>
            <ResponsiveContainer width="100%" height={236}>
              <BarChart data={data.ratings} layout="vertical">
                <XAxis type='number' dataKey="count"></XAxis>
                <YAxis type='category' dataKey="name"></YAxis>
                <Tooltip></Tooltip>
                <Bar dataKey="count" fill="#FF8811" barSize={20} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div><br />
        <p className='text-[#001931] font-semibold text-2xl'>Description</p><br />
        <p className='text-[#627382] font-xl text-justify'>{data.description}</p>
      </div>
    </div>
  );
};

export default AppDetails;