import React from 'react';
import Banner from '../../Banner/Banner';
import Apps from '../Apps/Apps';
import { useLoaderData } from 'react-router-dom'; // ✅ FIXED

const Home = () => {
  const data = useLoaderData();
 
  return (
    <div>
      <Banner />
      <Apps data={data} />
    </div>
  );
};

export default Home;
