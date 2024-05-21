
"use client"


import React from 'react';

const FullscreenButton = () => {
  const handleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => {
        console.error(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
      });
    } else {
      document.exitFullscreen();
    }
  };

  return (
    <button onClick={handleFullscreen} style={{ position: 'fixed', top: 10, right: 10 }}>
      Toggle Fullscreen
    </button>
  );
};

export default FullscreenButton;