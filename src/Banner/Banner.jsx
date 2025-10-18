import React from 'react';

const Banner = () => {
  return (
    <div>
      <div className='flex-1 text-center'>
        <h1 className='mt-10 text-5xl font-bold'>We Build <br />
<span className='text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-500'>Productive</span> Apps</h1>
<p className='mt-4 p-5 text-gray-500'>At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
      </div>
      <div className='mt-5 flex justify-center gap-5'>
        <a href="https://play.google.com/store/games?device=windows"><button className="btn"><img src="/assets/fi_16076057.png" alt="" />Google Play</button></a>
        <a href="https://www.apple.com/app-store/"><button className="btn"><img src="/assets/Group.png" alt="" />App Store</button></a>
      </div>
      <div>
        {/* banner img */}
          <div className='mt-5 flex justify-center max-w-[650px] mx-auto'>
            <img src="/assets/hero.png" alt="" />
          </div>
      </div>
      {/* lower banner */}
      <div className='bg-linear-to-bl from-purple-700 to-violet-400 pt-6'>
        
        <h1  className='text-3xl text-white text-center font-bold p-5'>Trusted By Millions, Built For You</h1>
        
        <div className='flex justify-center gap-5  pb-10'>
          <div className='text-center text-white'>
          <p>Total Downloads</p>
          <h1 className='text-5xl font-extrabold'>29.6M</h1>
          <p>21% more than last month</p>
        </div>
        <div className='text-center text-white'>
          <p>Total Reviews</p>
          <h1 className='text-5xl font-extrabold'>906K</h1>
          <p>46% more than last month</p>
        </div>
        <div className='text-center text-white'>
          <p>Active Apps</p>
          <h1 className='text-5xl font-extrabold'>132+</h1>
          <p>31 more will Launch</p>
          </div>
        </div>
      
      </div>
    </div>
  );
};

export default Banner;