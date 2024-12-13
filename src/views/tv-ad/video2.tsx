import React, { useRef, useEffect } from "react";

const FullScreenVideo2 = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement: any = videoRef.current;
    if (videoElement) {
      videoElement.play();
    }
  }, []);

  const handleFullScreen = () => {
    const videoElement: any = videoRef.current;

    if (videoElement.requestFullscreen) {
      videoElement.requestFullscreen();
    } else if (videoElement.webkitRequestFullscreen) {
      /* Safari */
      videoElement.webkitRequestFullscreen();
    } else if (videoElement.msRequestFullscreen) {
      /* IE11 */
      videoElement.msRequestFullscreen();
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-black">
      <video
        ref={videoRef}
        src="/assets/videos/video2.mp4" // Path to your video file
        controls
        loop
        className="w-full h-full object-cover"
      ></video>
      <button
        onClick={handleFullScreen}
        className="absolute bottom-10 px-6 py-2 bg-white text-black font-bold rounded shadow-lg"
      >
        Full Screen
      </button>
    </div>
  );
};

export default FullScreenVideo2;
