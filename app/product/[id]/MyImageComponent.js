"use client"

import { useState } from 'react';
import Image from 'next/image'

const SwiperImageComponent = ({ src }) => {
  const [isLoading, setIsLoading] = useState(true); // State to track loading

  return (
    <div style={{height:'50vh',width: '100%', position:'relative',margin: '0'}} 

>
      {isLoading && (
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span>Loading...</span> 
        </div>
      )}
      <Image
      style={{objectFit:"contain"}}
      src={src}
      fill={true}
      alt="Picture of the author"
        onLoadingComplete={() => setIsLoading(false)}
      />
    </div>
  );
};

export default SwiperImageComponent