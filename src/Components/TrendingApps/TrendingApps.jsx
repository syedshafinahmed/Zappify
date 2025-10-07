import React from 'react';

const TrendingApps = ({ data }) => {
    console.log(data);
    return (
        <div className='max-w-7xl mx-auto mt-15'>
            <div className='text-center mb-15'>
                <h1 className='text=[#001931] font-bold mb-3 text-3xl md:text-5xl'>Trending Apps</h1>
                <p className='text-[#627382] text-sm md:text-xl'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            {
                data.map(dat => 
                    <div key={dat.id}>
                        <p>{dat.title}</p>
                        <img src={dat.image} alt="" />
                    </div>
                )
            }
        </div>
    );
};

export default TrendingApps;