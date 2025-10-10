import React, { use, useState } from 'react';
import SearchError from '../../assets/Search-error.png'
import List from '../List/List';

const Apps = ({ dataPromise }) => {
    const data = use(dataPromise);
    const [searchApp, setSearchApp] = useState("");
    const filteredApps = data.filter(app =>
        app.title.toLowerCase().includes(searchApp.toLowerCase())
    );

    return (
        <div className='bg-gray-300 pb-20'>
            <title>Zappify-Apps</title>
            <div className='max-w-7xl mx-auto'>
                <div className='text-center mb-15 pt-15'>
                    <h1 className='text-[#001931] font-bold mb-3 text-3xl md:text-5xl'>Our All Applications</h1>
                    <p className='text-[#627382] text-sm md:text-xl'>Explore All Apps on the Market developed by us. We code for Millions.</p>
                </div>
                <div className='flex flex-col md:flex-row px-10 md:px-0  items-center justify-between mb-15'>
                    <h1 className='font-bold text-2xl mb-5 md:mb-0'>{data.length} Apps found</h1>
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
                        <input className='outline-none' type="search" placeholder="Search Apps" value={searchApp} onChange={e => setSearchApp(e.target.value)} required />
                    </label>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 px-10 md:px-0 lg:px-0'>
                    {
                        // data.map(dat => <List dat={dat} key={dat.id}></List>)
                        // filteredApps.map(dat => <List dat={dat} key={dat.id}></List>)
                        filteredApps.length > 0 ? (filteredApps.map(dat => <List dat={dat} key={dat.id}></List>)) :
                            <div className='flex flex-col md:flex-row items-center justify-center gap-x-15 mx-auto w-44 md:w-300'>
                                <div className='flex justify-center mt-10'>
                                    <img className='mb-10 w-40 md:w-100' src={SearchError} alt="" />
                                </div>
                                <div className='text-center mb-10'>
                                    <h1 className='text-[#001931] font-bold mb-3 text-3xl md:text-5xl'>Oops!!! App not found!</h1>
                                    <p className='text-[#627382] text-sm md:text-xl'>The App you are requesting is not found on our system.  please try another app.</p>
                                </div>
                            </div>

                    }
                </div>
            </div>
        </div>
    );
};

export default Apps;