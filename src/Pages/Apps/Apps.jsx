import React, { Suspense, useEffect, useState } from 'react';
import { data } from 'react-router';
import App from '../App/App';


const Apps = ({data}) => {
  const [allApps, setAllApps]=useState([]);

//   useEffect(()=>{
//   fetch("8appData.json")
//   .then(res=>res.json())
//   .then(data=>{
//     setAllApps(data)
//   })
// },[])

// const appPromise=fetch("./8appData.json")
// .then(res=>res.json())

  return (
    <div>
      <h1 className='text-4xl font-bold text-center p-6'>Trending Apps</h1>
      <Suspense fallback={<span>Loading...</span>}>
      <div className='mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
        {
        data.map((singleApp)=><App key={singleApp.id} singleApp={singleApp}></App>)
      }
      </div>
      </Suspense>
      <div className='flex justify-center mt-10'>
        <button className="btn btn-active btn-primary bg-gradient-to-r from-indigo-600 to-purple-500 rounded">Show All</button>
      </div>
    </div>
  );
};

export default Apps;