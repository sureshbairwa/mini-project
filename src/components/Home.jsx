import React from 'react';
import Bmi from './BMI/Bmi';
import space2 from './clock.jpeg'; // Import the image

const Home = () => {
  return (
    <div 
      className="flex justify-center h-screen"
      style={{
        backgroundImage: `url(${space2})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Bmi />
    </div>
  );
}

export default Home;
