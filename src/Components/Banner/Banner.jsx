import React from 'react';

const Banner = () => {


  return (
    <div>
      <div className='text-center px-4 md:px-8'>
        <h1 className='mt-10 text-4xl md:text-5xl font-bold leading-tight'>
          We Build <br />
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-500'>
            Productive
          </span>{' '}
          Apps
        </h1>
        <p className='mt-4 text-sm md:text-base text-gray-500 max-w-2xl mx-auto'>
          At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter,
          and more exciting. Our goal is to turn your ideas into digital experiences that truly
          make an impact.
        </p>
      </div>

      <div className='mt-5 flex flex-col sm:flex-row justify-center gap-4 px-4'>
        <a href="https://play.google.com/store/games?device=windows">
          <button className="btn flex items-center gap-2 px-5 py-2 bg-gray-200 hover:bg-gray-300">
            <img className="w-5 h-5" src="/assets/fi_16076057.png" alt="Google Play" />
            Google Play
          </button>
        </a>
        <a href="https://www.apple.com/app-store/">
          <button className="btn flex items-center gap-2 px-5 py-2 bg-gray-200 hover:bg-gray-300">
            <img className="w-5 h-5" src="/assets/Group.png" alt="App Store" />
            App Store
          </button>
        </a>
      </div>

      <div className='mt-8 flex justify-center px-4'>
        <img
          className='w-full max-w-[650px] h-auto object-contain'
          src="/assets/hero.png"
          alt="Hero"
        />
      </div>

      <div className='bg-gradient-to-bl from-purple-700 to-violet-400 pt-10 pb-14 mt-10 px-4'>
        <h1 className='text-2xl md:text-3xl text-white text-center font-bold mb-6'>
          Trusted By Millions, Built For You
        </h1>

        <div className='flex flex-col md:flex-row justify-center items-center gap-10 text-white'>
          <div className='text-center'>
            <p>Total Downloads</p>
            <h1 className='text-4xl md:text-5xl font-extrabold'>29.6M</h1>
            <p className='text-sm'>21% more than last month</p>
          </div>
          <div className='text-center'>
            <p>Total Reviews</p>
            <h1 className='text-4xl md:text-5xl font-extrabold'>906K</h1>
            <p className='text-sm'>46% more than last month</p>
          </div>
          <div className='text-center'>
            <p>Active Apps</p>
            <h1 className='text-4xl md:text-5xl font-extrabold'>132+</h1>
            <p className='text-sm'>31 more will Launch</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
