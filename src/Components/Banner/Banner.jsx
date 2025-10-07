import React from 'react';
import PlayStore from '../../assets/playstore.png'
import AppStore from '../../assets/appstore.png'
import Hero from '../../assets/hero.png'
const Banner = () => {
    return (
        <div className='mt-15'>
            <p className='text-center font-black text-3xl md:text-7xl text-[#001931]'>We Build <br /><span className='text-[#632EE3]'>Productive</span> Apps</p>
            <p className='text-center text-[#627382] text-sm md:text-xl mt-7 px-20 md:px-40 font-medium'>At Zappify, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
            <div className='flex justify-center gap-x-10 mt-10'>
                <a href='https://play.google.com/' target="_blank" className='btn'><span className='flex items-center gap-x-3'><img className='w-6' src={PlayStore} alt="" />Google Play</span></a>
                <a href='https://www.apple.com/app-store/' target="_blank" className='btn '><span className='flex items-center gap-x-3'><img className='w-6' src={AppStore} alt="" />App Store</span></a>
            </div>
            <div className='flex justify-center'>
                <img className='mt-10' src={Hero} alt="" />
            </div>
            <div className='text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2] py-15'>
                <h1 className='text-center text-2xl md:text-5xl font-bold mb-10'>Trusted by Millions, Built for You</h1>
                <div className='flex flex-col md:flex-row gap-y-6 md:gap-y-0 justify-center items-center gap-x-20'>
                    <div className='flex flex-col items-center'>
                        <p>Total Downloads</p>
                        <p className='font-extrabold text-2xl md:text-4xl'>29.6M</p>
                        <p>21% more than last month</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <p>Total Reviews</p>
                        <p className='font-extrabold text-2xl md:text-4xl'>906K</p>
                        <p>46% more than last month</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <p>Active Apps</p>
                        <p className='font-extrabold text-2xl md:text-4xl'>132+</p>
                        <p>31 more will Launch</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;