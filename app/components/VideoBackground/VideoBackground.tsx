'use client'
import React, { useState, useEffect } from 'react';

const VideoBackground = React.memo(function VideoBackground() {
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <>
      {/* Video Background */}
      <div className="fixed inset-0 -z-30 overflow-hidden">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute min-w-full min-h-full object-cover"
          style={{ 
            width: '100%', 
            height: '100%',
            opacity: videoLoaded ? 0.6 : 0
          }}
          onLoadedData={() => setVideoLoaded(true)}
        >
          <source src="/molecules.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Dark gradient overlay to enhance text visibility */}
        <div className="fixed inset-0 -z-25 bg-gradient-to-br from-black via-gray-900 to-slate-900 opacity-70"></div>
      </div>
    </>
  );
});

export default VideoBackground;