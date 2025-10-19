import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom'; 
import { GoDownload } from "react-icons/go";
import { FaStar } from "react-icons/fa";
import { MdReviews } from "react-icons/md";
import { addToStoreDB, getInstalledApp, removeFromStoreDB } from '../../Utility/addToDB';
import { toast } from 'react-toastify'; // Import react-toastify
import 'react-toastify/dist/ReactToastify.css'; // Import toast styles

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
    return <div>App not found</div>;
  }

  const { title, image, size, companyName, downloads, reviews, ratingAvg } = singleApp;

  // Handle Install
  const handleInstall = () => {
    addToStoreDB(id); // Add app to installed list
    setInstalled(true); // Update state to reflect installation
    toast.success(`${title} installed successfully!`); // Show toast for installation
  };

  // Handle Uninstall
  const handleUninstall = () => {
    removeFromStoreDB(id); // Remove app from installed list
    setInstalled(false); // Update state to reflect uninstallation
    toast.error(`${title} uninstalled successfully!`); // Show toast for uninstallation
  };

  return (
    <div className="card card-side bg-base-300 shadow-sm ">
      <figure>
        <img
          className='w-[350px] h-[350px] object-contain mt-10 ml-5 p-5 shadow-xl bg-white relative rounded'
          src={image}
          alt={title}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-4xl font-bold">{title}</h2>
        <p className='text-2xl'>
          Developed by{' '}
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-500'>
            {companyName}
          </span>
        </p>

        <hr className="h-px my-8 border-0 dark:bg-gray-300" />

        <div className='flex gap-20'>
          <div>
            <GoDownload className='text-5xl text-green-400 ' />
            <p className='mt-3 text-2xl'>Downloads</p>
            <p className='mt-3 text-4xl font-extrabold'>{downloads}</p>
          </div>
          <div>
            <FaStar className='text-5xl text-orange-400' />
            <p className='mt-3 text-2xl'>Average Ratings</p>
            <p className='mt-3 text-4xl font-extrabold'>{ratingAvg}</p>
          </div>
          <div>
            <MdReviews className='text-5xl text-purple-500' />
            <p className='mt-3 text-2xl'>Total Reviews</p>
            <p className='mt-3 text-4xl font-extrabold'>{reviews}</p>
          </div>
        </div>

        <div className="card-actions justify-baseline">
          <button
            onClick={installed ? handleUninstall : handleInstall}
            className={`mt-5 btn ${installed ? 'bg-red-400' : 'bg-green-400'} rounded`}
          >
            {installed ? 'Uninstall' : `Install Now (${size} MB)`}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppDetails;
