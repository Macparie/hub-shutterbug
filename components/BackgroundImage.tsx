

import 'tailwindcss/tailwind.css';


import React from 'react';

const BackgroundImage = () => {
  return (
    <div className="bg-cover bg-center h-screen" style={{ backgroundImage: `url('@/public/images/carousel-avatar-05.jpg')` }}>
      {/* Content goes here */}
    </div>
  );
}

export default BackgroundImage;
