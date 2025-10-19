
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { getInstalledApp } from '../../Utility/addToDB';

const Installation = () => {
  const allApps = useLoaderData(); 
const installedAppIds = getInstalledApp().map(id => Number(id));

const installedApps = allApps.filter(app => installedAppIds.includes(app.id));


  if (installedApps.length === 0) {
    return (
      <div className="text-center mt-10 text-2xl text-gray-600">
        No apps installed yet.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {installedApps.map(app => (
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
              <button className="btn btn-outline btn-success" disabled>
                Installed
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Installation;
