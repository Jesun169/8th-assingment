import React, { use } from 'react';
import { GoDownload } from "react-icons/go";
import { FaStar } from "react-icons/fa";

const App = ({singleApp}) => {
  const{
image
,title,downloads,
ratingAvg
}=singleApp
  
  return (
    <div>
         <div className="card bg-white shadow-sm p-4">
  <figure>
    <img className='h-[100px] w-[100px]'
      src={image}
      alt={title} />
  </figure>
  <div className="card-body">
    <h2 className="card-title text-3xl">
      {title}
    </h2>
    <div className="flex justify-between">
      <div className="p-3 mt-3 flex items-center bg-gray-100 text-2xl text-green-400 font-bold gap-2 rounded"><GoDownload />{downloads
}</div>
      <div className="p-3 mt-3 flex items-center bg-gray-100 text-2xl text-orange-400 font-bold gap-2 rounded"><FaStar />{
ratingAvg}</div>
    </div>
  </div>
</div>
    </div>
  );
};

export default App;