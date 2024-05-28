"use client"

import { useState } from 'react';
import Image from 'next/image'
 
const MyImageComponent = ({ src }) => {
  const [isLoading, setIsLoading] = useState(true); // State to track loading

  return (
    <div className="relative w-40 h-40">
      {isLoading && (
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span>Loading...</span> {/* You can replace this with a spinner component */}
        </div>
      )}
      <Image
        src={src}
        alt="jjhfff"
        fill={true}
        style={{ objectFit: 'cover' }} // Using style prop for object-fit
        onLoadingComplete={() => setIsLoading(false)}
      />
    </div>
  );
};

export default MyImageComponent;
