import React from 'react';
import List from '../List/List';

const TrendingApps = ({ data }) => {
    console.log(data);
    return (
        <div className='bg-gray-200'>
            <div className='max-w-7xl mx-auto pt-15'>
                <div className='text-center mb-15'>
                    <h1 className='text=[#001931] font-bold mb-3 text-3xl md:text-5xl'>Trending Apps</h1>
                    <p className='text-[#627382] text-sm md:text-xl'>Explore All Trending Apps on the Market developed by us</p>
                </div>
                <div className='grid grid-cols-4 gap-5'>
                    {
                        data.map(dat => <List dat={dat} key={dat.id}></List>)
                    }
                </div>
            </div>
        </div>
    );
};

export default TrendingApps;