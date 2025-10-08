import React from 'react';
import List from '../List/List';
import { Link } from 'react-router';

const TrendingApps = ({ data }) => {
    console.log(data);
    return (
        <div className='bg-gray-300'>
            <div className='max-w-7xl mx-auto pt-15'>
                <div className='text-center mb-15'>
                    <h1 className='text=[#001931] font-bold mb-3 text-3xl md:text-5xl'>Trending Apps</h1>
                    <p className='text-[#627382] text-sm md:text-xl'>Explore All Trending Apps on the Market developed by us.</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 px-10 md:px-0 lg:px-0'>
                    {
                        data.slice(0, 8).map(dat => <List dat={dat} key={dat.id}></List>)
                    }
                </div>
            </div>
            <div className='flex justify-center p-20'>
                <Link to="/apps" className='btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white'>Show All</Link>
            </div>
        </div>
    );
};

export default TrendingApps;