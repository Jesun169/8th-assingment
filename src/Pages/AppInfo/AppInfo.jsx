import React, { useState, useEffect } from 'react';
import { GoDownload } from 'react-icons/go'; 
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const App = ({ singleApp }) => {
  const {
    id,
    image,
    title,
    downloads,
    ratingAvg,
  } = singleApp;

  return (
    <Link to={`/appDetails/${id}`}>
    <div key={id} className="card bg-white shadow-sm p-4">
      <figure>
        <img className="h-[100px] w-[100px]" src={image} alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-3xl">{title}</h2>
        <div className="flex justify-between gap-4">
          <div className="p-3 mt-3 flex items-center bg-gray-100 text-2xl text-green-400 font-bold gap-2 rounded">
            <GoDownload />
            {downloads}
          </div>
          <div className="p-3 mt-3 flex items-center bg-gray-100 text-2xl text-orange-400 font-bold gap-2 rounded">
            <FaStar />
            {ratingAvg}
          </div>
        </div>
      </div>
    </div>
    </Link>
  );
};

const AppInfo = () => {
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('20appData.json');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setApps(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <div className="flex-1 text-center">
        <h1 className="mt-10 text-4xl font-bold">Our All Applications</h1>
        <p className="text-gray-600">Explore All Apps on the Market developed by us. We code for Millions</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
        {apps.map((app) => (
          <App key={app.id} singleApp={app} />
        ))}
      </div>
    </div>
  );
};

export default AppInfo;
