"use client"

import React, { useEffect } from 'react';

const FullscreenComponent = () => {
  useEffect(() => {
    const handleFullscreen = () => {
      const element = document.documentElement;

      if (element.requestFullscreen) {
        element.requestFullscreen();
      } else if (element.mozRequestFullScreen) { // Firefox
        element.mozRequestFullScreen();
      } else if (element.webkitRequestFullscreen) { // Chrome, Safari, and Opera
        element.webkitRequestFullscreen();
      } else if (element.msRequestFullscreen) { // IE/Edge
        element.msRequestFullscreen();
      }
    };

    const fullscreenTimeout = setTimeout(handleFullscreen, 1000); // Delay of 1 second

    const handleFullscreenChange = () => {
      if (!document.fullscreenElement) {
        console.log('Exited fullscreen mode');
      } else {
        console.log('Entered fullscreen mode');
      }
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);

    return () => {
      clearTimeout(fullscreenTimeout);
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  return (
    <div>
      {/* Your content goes here */}
    </div>
  );
};

export default FullscreenComponent;