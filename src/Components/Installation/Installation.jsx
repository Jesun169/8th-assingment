import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getInstalledApp, removeFromStoreDB } from '../../Utility/addToDB';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Installation = () => {
  const allApps = useLoaderData();
  const [installedAppIds, setInstalledAppIds] = useState(getInstalledApp().map(Number));
  const [sortKey, setSortKey] = useState('');

  const handleUninstall = (app) => {
    removeFromStoreDB(app.id);
    setInstalledAppIds(prev => prev.filter(appId => appId !== app.id));
    toast.success(`${app.title} uninstalled successfully!`);
  };

  const installedApps = allApps.filter(app => installedAppIds.includes(app.id));

  let sortedApps = [...installedApps];
  if (sortKey === 'name') {
    sortedApps.sort((a, b) => a.title.localeCompare(b.title));
  } else if (sortKey === 'size') {
    sortedApps.sort((a, b) => a.size - b.size);
  }

  return (
    <>
      <ToastContainer position="top-center" autoClose={2000} />
      {installedApps.length === 0 ? (
        <div className="text-center mt-10 text-2xl text-gray-600">
          No apps installed yet.
        </div>
      ) : (
        <div className="p-6">
          <div className="text-center">
            <h1 className="mt-10 text-4xl font-bold">Your Installed Apps</h1>
            <p className="mt-2 p-5 text-gray-500">
              Explore all trending apps installed from the store
            </p>
          </div>
         {/* sorting btn */}
          <div className="flex flex-col sm:flex-row justify-between items-center mb-5 gap-4">
            <h2 className="font-bold text-xl">
              ({sortedApps.length}) App{sortedApps.length !== 1 && 's'} Found
            </h2>
            <select
              className="select select-bordered"
              value={sortKey}
              onChange={(e) => setSortKey(e.target.value)}
            >
              <option value="">Sort by</option>
              <option value="name">Name</option>
              <option value="size">Size</option>
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedApps.map(app => (
              <div key={app.id} className="card bg-base-200 shadow-xl">
                <figure>
                  <img
                    className="w-[200px] h-[200px] object-contain mt-5"
                    src={app.image}
                    alt={app.title}
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-2xl">{app.title}</h2>
                  <p className="text-lg text-gray-500">By {app.companyName}</p>
                  <div className="text-sm text-gray-400 mt-2">
                    Size: {app.size} MB | Rating: {app.ratingAvg}
                  </div>
                  <div className="card-actions justify-end mt-4">
                    <button
                      className="btn btn-outline btn-error"
                      onClick={() => handleUninstall(app)}
                    >
                      Uninstall
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Installation;
