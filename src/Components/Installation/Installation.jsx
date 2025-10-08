import React from 'react';

const Installation = () => {
    return (
        <div className='bg-gray-300'>
            <div className='max-w-7xl mx-auto py-15'>
                <div className='text-center mb-15'>
                    <h1 className='text=[#001931] font-bold mb-3 text-3xl md:text-5xl'>Your Installed Apps</h1>
                    <p className='text-[#627382] text-sm md:text-xl'>Explore All Trending Apps on the Market developed by us.</p>
                </div>

                <div className='flex flex-col md:flex-row px-10 md:px-0  items-center justify-between mb-15'>
                    <h1 className='font-bold text-2xl mb-5 md:mb-0'>({ }) Apps found</h1>
                    <div className="dropdown dropdown-start">
                        <div tabIndex={0} role="button" className="btn m-1"><span className='flex items-center gap-x-2'><p>Sort By Size</p><i class="fa-solid fa-caret-down"></i></span></div>
                        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-30 p-2 shadow-sm">
                            <li><a>High-Low</a></li>
                            <li><a>Low-High</a></li>
                        </ul>
                    </div>
                </div>

                <div>
                    
                </div>
            </div>
        </div>
    );
};

export default Installation;