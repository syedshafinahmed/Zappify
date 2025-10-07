import React from 'react';

const List = ({ dat }) => {
    return (
        <div>
            <div key={dat.id} className='border p-5 shadow-3xl bg-white rounded-xl'>
                <img src={dat.image} alt="" />
                <p className='text-center text-2xl font-bold py-5'>{dat.title}</p>
                <div className='flex justify-between text-xl'>
                    <span className='font-bold badge badge-success'><i class="fa-solid fa-download"></i>{dat.downloads}</span>
                    <span className='font-bold badge badge-warning'><i class="fa-solid fa-star"></i>{dat.ratingAvg}</span>
                </div>
            </div>
        </div>
    );
};

export default List;