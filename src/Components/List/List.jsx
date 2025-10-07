import React from 'react';

const List = ({ dat }) => {
    return (
        <div>
            <div key={dat.id} className='shadow-2xl p-5 shadow-3xl bg-white rounded-xl'>
                <div className='flex justify-center'>
                    <img src={dat.image} alt="" />
                </div>
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