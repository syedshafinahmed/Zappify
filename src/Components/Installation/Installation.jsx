import React, { useEffect, useState } from 'react';
import { Bounce, toast, ToastContainer } from 'react-toastify';

const Installation = () => {
    const [apps, setApps] = useState([]);
    useEffect(() => {
        const storedApps = JSON.parse(localStorage.getItem("installedApps")) || [];
        setApps(storedApps);
    }, []);
    const handleUninstall = (id) => {
        const updatedApps = apps.filter(app => app.id !== id);
        setApps(updatedApps);
        localStorage.setItem("installedApps", JSON.stringify(updatedApps));
        toast.warning("Uninstalled Successfully!", {
            position: "top-center",
            autoClose: 1000,
            transition: Bounce,
        });
    };
    // const [sortOrder, setSortOrder] = useState(null);
    const handleSort = (order) => {
        const parseDownloads = (val) => {
            if(val.includes("M")) return parseFloat(val) * 1000000;
            if(val.includes("K")) return parseFloat(val) * 1000;
            return parseFloat(val);
        }
        

        const sortedApps = [...apps].sort((a, b) => {
            const aDownloads = parseDownloads(a.downloads);
            const bDownloads = parseDownloads(b.downloads);
            if (order === "high-low") return bDownloads - aDownloads;
            if (order === "low-high") return aDownloads - bDownloads;
            return 0;
        });

        setApps(sortedApps);
    }
    return (
        <div className='bg-gray-300'>
            <div className='max-w-7xl mx-auto py-15'>
                <div className='text-center mb-15'>
                    <h1 className='text-[#001931] font-bold mb-3 text-3xl md:text-5xl'>Your Installed Apps</h1>
                    <p className='text-[#627382] text-sm md:text-xl'>Explore All Trending Apps on the Market developed by us.</p>
                </div>
                <ToastContainer></ToastContainer>
                <div className='flex flex-col md:flex-row px-10 md:px-0  items-center justify-between mb-15'>
                    <h1 className='font-bold text-2xl mb-5 md:mb-0'>{apps.length} Apps found</h1>
                    <div className="dropdown dropdown-start">
                        <div tabIndex={0} role="button" className="btn m-1"><span className='flex items-center gap-x-2'><p>Sort By Downloads</p><i class="fa-solid fa-caret-down"></i></span></div>
                        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-30 p-2 shadow-sm">
                            <li><button onClick={() => handleSort("high-low")}>High-Low</button></li>
                            <li><button onClick={() => handleSort("low-high")}>Low-High</button></li>
                        </ul>
                    </div>
                </div>

                <div>
                    {
                        apps.map(app => (
                            <div className='flex flex-col md:flex-row gap-y-3 md:gap-y-0 justify-between bg-white rounded-xl p-10 items-center mb-5 mx-3 md:mx-0'>
                                <div className='flex items-center gap-x-10 '>
                                    <img className='w-20' src={app.image} alt="" />
                                    <div>
                                        <h1 className='text-[#001931] font-medium text-xl mb-3'>{app.title}</h1>
                                        <div className='flex justify-center items-center gap-x-2 md:gap-x-5'>
                                            <span className='font-bold badge badge-success'><i class="fa-solid fa-download"></i>{app.downloads}</span>
                                            <span className='font-bold badge badge-warning my-3 md:my-0'><i class="fa-solid fa-star"></i>{app.ratingAvg}</span>
                                            <p className='text-[#627382] text-xs'>{app.size}</p>
                                        </div>
                                    </div>
                                </div>
                                <button onClick={() => handleUninstall(app.id)} className='btn bg-[#00D390] text-white font-bold'>Uninstall</button>
                            </div>

                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Installation;