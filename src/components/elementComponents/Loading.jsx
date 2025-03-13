import React, { useEffect, useState } from "react";

const Loading = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return oldProgress + 10; // Adjust speed of loading
      });
    }, 300); // Adjust the interval timing if needed

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-black bg-opacity-70">
      {/* Animated Loader */}
      <div className="w-12 h-12 border-4 border-gray-200 border-t-transparent rounded-full animate-spin"></div>

      {/* Loading Text */}
      <p className="mt-4 text-white text-lg font-semibold">Loading...</p>

      {/* Progress Bar */}
      <div className="w-64 h-2 bg-gray-700 mt-4 rounded-full overflow-hidden">
        <div
          className="h-full bg-blue-500 transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      {/* Progress Percentage */}
      <p className="mt-2 text-gray-300 text-sm">{progress}%</p>

      <p className="mt-4 bg-gradient-to-r from-blue-400 via-blue-500 to-green-600 text-transparent bg-clip-text text-3xl font-bold">Welcome to TICE</p>
    </div>
  );
};

export default Loading;
