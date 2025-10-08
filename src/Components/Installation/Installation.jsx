import React, { useEffect, useState } from 'react';

const Installation = () => {
    const [apps, setApps] = useState([]);
    useEffect(() => {
        const storedApps = JSON.parse(localStorage.getItem("installedApps")) || [];
        setApps(storedApps);
    }, [])
    return (
        <div className='bg-gray-300'>
            <div className='max-w-7xl mx-auto py-15'>
                <div className='text-center mb-15'>
                    <h1 className='text=[#001931] font-bold mb-3 text-3xl md:text-5xl'>Your Installed Apps</h1>
                    <p className='text-[#627382] text-sm md:text-xl'>Explore All Trending Apps on the Market developed by us.</p>
                </div>

                <div className='flex flex-col md:flex-row px-10 md:px-0  items-center justify-between mb-15'>
                    <h1 className='font-bold text-2xl mb-5 md:mb-0'>({apps.length}) Apps found</h1>
                    <div className="dropdown dropdown-start">
                        <div tabIndex={0} role="button" className="btn m-1"><span className='flex items-center gap-x-2'><p>Sort By Size</p><i class="fa-solid fa-caret-down"></i></span></div>
                        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-30 p-2 shadow-sm">
                            <li><a>High-Low</a></li>
                            <li><a>Low-High</a></li>
                        </ul>
                    </div>
                </div>

                <div>
                    {
                        apps.map(app => (
                            <div className='flex justify-between bg-white rounded-xl p-10 items-center mb-5'>
                                <div className='flex items-center gap-x-10 '>
                                    <img className='w-20' src={app.image} alt="" />
                                    <div>
                                        <h1 className='text-[#001931] font-medium text-xl mb-3'>{app.title}</h1>
                                        <div className='flex gap-x-5'>
                                            <span className='font-bold badge badge-success'><i class="fa-solid fa-download"></i>{app.downloads}</span>
                                            <span className='font-bold badge badge-warning'><i class="fa-solid fa-star"></i>{app.ratingAvg}</span>
                                            <p className='text-[#627382]'>{app.size}</p>
                                        </div>
                                    </div>
                                </div>
                                <button className='btn bg-[#00D390] text-white font-bold'>Uninstalled</button>
                            </div>

                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Installation;