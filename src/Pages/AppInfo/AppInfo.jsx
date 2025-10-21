import React, { useState, useEffect } from 'react';
import { GoDownload } from 'react-icons/go'; 
import { FaStar } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';



const App = ({ singleApp }) => {
  const { id, image, title, downloads, ratingAvg } = singleApp;

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
  const [searchQuery, setSearchQuery] = useState('');

  const navigate=useNavigate();


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

  if (loading) return <div className='flex text-3xl text-center'>
    <div><img src="/assets/logo.png" alt="Loading..." className="w-20 h-20" /></div>
    <div>Loading...</div>
</div>;
  if (error) return <div>Error: {error}</div>;

  
  const filteredApps = apps.filter(app =>
    app.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      {filteredApps.length > 0 && (
  <div className="flex-1 text-center">
    <h1 className="mt-10 text-4xl font-bold">Our All Applications</h1>
    <p className="mt-5 text-gray-600">Explore All Apps on the Market developed by us. We code for Millions</p>
  </div>
)}


      <div className='flex justify-between items-center mt-6'>
        <div className='font-bold'>({filteredApps.length}) App{filteredApps.length !== 1 && 's'} Found</div>
        <div>
          <label className="input input-bordered flex items-center gap-2">
            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              type="search"
              placeholder="Search Apps"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </label>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
        {filteredApps.length > 0 ? (
          filteredApps.map((app) => <App key={app.id} singleApp={app} />)
        ) : (
          <div className="col-span-full text-center  text-black mt-10">
            <div className='flex justify-center mt-5'>
              <img className='w-[300px] h-auto' src="/src/assets/OBJECTS.png" alt="" />
            </div>
            <h1 className='text-4xl font-bold mt-10'>OPPS!! APP NOT FOUND</h1>
            <p className='mt-5 text-gray-600'>The App you are requesting is not found on our system.  please try another apps</p>
            
            <button onClick={() => navigate(-1)} className='mt-10 btn bg-gradient-to-r from-indigo-600 to-purple-500 text-white rounded'>Go Back</button>
          </div>

        )}
      </div>
    </div>
  );
};

export default AppInfo;
