import React, { useState, useEffect } from 'react';
import space from './space.png'; // Import the image

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  const hour = time.getHours();
  const minute = time.getMinutes();
  const seconds = time.getSeconds();

  return (
    <div
      className="bg-local flex justify-center items-center h-screen bg-slate-500" 
      style={{
        backgroundImage: `url(${space})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      id='clock'
    >
      <div className="flex m-auto w-1/4 bg-gradient-to-r  hover:from-lime-500 hover:to-purple-500 h-20 space-x-10 justify-center items-center">
        <h1 className="text-5xl pr-1">{hour} </h1>
        <h1 className="text-5xl">:</h1>
        <h1 className="text-5xl pr-2">{minute}</h1>
        <h1 className="text-5xl">:</h1>
        <h1 className="text-5xl pl-2 pr-2">{seconds}</h1>
      </div>
    </div>
  );
};

export default Clock;
