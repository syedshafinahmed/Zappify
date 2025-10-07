import React, { use } from 'react';
import Banner from '../Banner/Banner';
import TrendingApps from '../TrendingApps/TrendingApps';


const Home = ({dataPromise}) => {
    const data = use(dataPromise);
    // console.log(data);
    return (
        <div>
            <Banner></Banner>
            <TrendingApps key={data.id} data={data}></TrendingApps>
        </div>
    );
};

export default Home;