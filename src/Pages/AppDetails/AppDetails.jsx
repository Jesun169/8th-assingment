import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom'; 
import { GoDownload } from "react-icons/go";
import { FaStar } from "react-icons/fa";
import { MdReviews } from "react-icons/md";
import { addToStoreDB, getInstalledApp, removeFromStoreDB } from '../../Utility/addToDB';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AppDetails = () => {
  const { appId } = useParams();
  const id = parseInt(appId, 10);
  const data = useLoaderData();

  const singleApp = data.find(app => app.id === id);
  const [installed, setInstalled] = useState(false);

  useEffect(() => {
    const installedApps = getInstalledApp().map(id => Number(id));
    if (installedApps.includes(id)) {
      setInstalled(true);
    }
  }, [id]);

  if (!singleApp) {
    return <div className="p-4 text-center text-xl">App not found</div>;
  }

  const { title, image, size, companyName, downloads, reviews, ratingAvg } = singleApp;

  const handleInstall = () => {
    addToStoreDB(id);
    setInstalled(true);
    toast.success(`${title} installed successfully!`);
  };

  const handleUninstall = () => {
    removeFromStoreDB(id);
    setInstalled(false);
    toast.error(`${title} uninstalled successfully!`);
  };

  return (
    <div className="card bg-base-300 shadow-sm flex flex-col md:flex-row max-w-6xl mx-auto p-4 md:p-8 rounded-lg">
      {/* Image Section */}
      <figure className="flex-shrink-0 md:w-1/2 flex justify-center">
        <img
          className='w-48 h-48 md:w-[350px] md:h-[350px] object-contain p-5 shadow-xl bg-white rounded'
          src={image}
          alt={title}
        />
      </figure>

      {/* Details Section */}
      <div className="card-body md:w-1/2 flex flex-col justify-between">
        <div>
          <h2 className="card-title text-3xl md:text-4xl font-bold">{title}</h2>
          <p className='text-lg md:text-2xl mt-2'>
            Developed by{' '}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-500'>
              {companyName}
            </span>
          </p>

          <hr className="h-px my-6 border-0 bg-gray-300" />

          <div className='flex flex-col sm:flex-row sm:gap-10 gap-6'>
            <div className="flex flex-col items-center sm:items-start">
              <GoDownload className='text-4xl sm:text-5xl text-green-400' />
              <p className='mt-2 text-lg sm:text-2xl'>Downloads</p>
              <p className='mt-1 text-3xl sm:text-4xl font-extrabold'>{downloads}</p>
            </div>
            <div className="flex flex-col items-center sm:items-start">
              <FaStar className='text-4xl sm:text-5xl text-orange-400' />
              <p className='mt-2 text-lg sm:text-2xl'>Average Ratings</p>
              <p className='mt-1 text-3xl sm:text-4xl font-extrabold'>{ratingAvg}</p>
            </div>
            <div className="flex flex-col items-center sm:items-start">
              <MdReviews className='text-4xl sm:text-5xl text-purple-500' />
              <p className='mt-2 text-lg sm:text-2xl'>Total Reviews</p>
              <p className='mt-1 text-3xl sm:text-4xl font-extrabold'>{reviews}</p>
            </div>
          </div>
        </div>

        <div className="card-actions justify-start md:justify-baseline mt-6">
          <ToastContainer position="top-center" autoClose={2000} />
          <button
  onClick={handleInstall}
  disabled={installed}
  className={`btn mt-5 px-6 py-3 text-lg rounded ${
    installed ? 'bg-green-400 cursor-not-allowed' : 'bg-green-400 hover:bg-green-500'
  } transition-colors duration-300`}
>
  {installed ? 'Installed' : `Install Now (${size} MB)`}
</button>

        </div>
      </div>
    </div>
  );
};

export default AppDetails;
