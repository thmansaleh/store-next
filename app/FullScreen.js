
"use client"
import { useRef } from 'react';

const FullscreenComponent = () => {
  const fullscreenRef = useRef(null);

  const handleFullscreen = () => {
    const element = fullscreenRef.current || document.documentElement;

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

  const handleFullscreenChange = () => {
    if (!document.fullscreenElement) {
      console.log('Exited fullscreen mode');
    } else {
      console.log('Entered fullscreen mode');
    }
  };

  React.useEffect(() => {
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  return (
    <div ref={fullscreenRef}>
      <button onClick={handleFullscreen}>Go Fullscreen</button>
      {/* Your content goes here */}
    </div>
  );
};

export default FullscreenComponent;