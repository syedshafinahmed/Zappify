import React, { use } from 'react';

import List from '../List/List';

const Apps = ({dataPromise}) => {
    const data = use(dataPromise);
    return (
        <div className='bg-gray-300 pb-20'>
            <div className='max-w-7xl mx-auto'>
                <div className='text-center mb-15 pt-15'>
                    <h1 className='text=[#001931] font-bold mb-3 text-3xl md:text-5xl'>Our All Applications</h1>
                    <p className='text-[#627382] text-sm md:text-xl'>Explore All Apps on the Market developed by us. We code for Millions.</p>
                </div>
                <div className='flex flex-col md:flex-row px-10 md:px-0  items-center justify-between mb-15'>
                    <h1 className='font-bold text-2xl mb-5 md:mb-0'>({data.length}) Apps found</h1>
                    <label className="input">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>
                        <input type="search" required placeholder="Search Apps" />
                    </label>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 px-25 md:px-0 lg:px-0'>
                    {
                        data.map(dat => <List dat={dat} key={dat.id}></List>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Apps;