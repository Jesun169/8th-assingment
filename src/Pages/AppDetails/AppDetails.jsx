import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const AppDetails = () => {
  const { appId } = useParams();
  const id = parseInt(appId, 10);
  const data = useLoaderData();

  const singleApp = data.find(app => app.id === id);

  console.log('Route Param:', appId);
  console.log('Parsed ID:', id);
  // console.log('Loader Data:', data);
  // console.log('Single App Found:', singleApp);

  if (!singleApp) {
    return <div>App not found</div>;
  }

  const { title, image, size } = singleApp;

  return (
    <div className="card card-side bg-base-100 shadow-sm">
  <figure>
    <img className='w-[350px] h-[350px] object-contain mt-10 ml-5 p-5 border-white shadow-2xl relative'
      src={image}
      alt={title} />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>Click the button to watch on Jetflix app.</p>
    <div className="card-actions justify-baseline">
      <button className="btn btn-primary">Install Now ({size} MB)</button>
    </div>
  </div>
</div>


    // <div className='flex justify-between border-gray-500 shadow-2xl  mx-auto'>
    //   <img className='w-60 mt-10 ml-5 p-5 border-white shadow-2xl' src={image} alt={title} />
    //   <h3>{title}</h3>
    // </div>
  );
};

export default AppDetails;
