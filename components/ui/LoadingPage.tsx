import React, { useEffect, useState } from 'react';
import Image from 'next/image'; // Use Next.js Image for better optimization
import { useRouter } from 'next/navigation';

const LoadingPage = () => {
  const router = useRouter();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Prefetch the home page or any other critical page
    router.prefetch('/');

    // Increment the progress bar every 30ms to simulate loading progress
    const interval = setInterval(() => {
      setProgress(prev => (prev < 100 ? prev + 2 : 100)); // Increment progress by 1% every 30ms
    }, 20); // Adjust the speed as necessary

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [router]);

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center relative overflow-hidden bg-gradient-dark">
      {/* Animated Background Clouds */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20">
        <div className="clouds animate-moveClouds"></div>
      </div>

      {/* Logo and Loading Animation */}
      <div className="flex flex-col items-center space-y-6 z-10">
        {/* Use Next.js Image to render the logo */}
        <Image
          src="/logo.svg" // Ensure the logo has a transparent background or no extra bg
          alt="Logo"
          width={300}
          height={300}
          className="animate-pulse-glow"
        />
        <h2 className="text-3xl font-bold text-neonYellow animate-fadeIn">Loading...</h2>

        {/* Progress Bar */}
        <div className="w-64 h-4 bg-gray-800 rounded-full overflow-hidden mt-4">
          <div
            className="bg-neonYellow h-full rounded-full transition-all duration-300 ease-in-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Percentage Text */}
        <div className="mt-2 text-neonYellow text-lg">{progress}%</div>
      </div>
    </div>
  );
};

export default LoadingPage;
