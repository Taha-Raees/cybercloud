// components/Layout/ClientLoadingLayout.js

"use client";

import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";
import LoadingPage from "@/components/ui/LoadingPage";
import { useState, useEffect } from "react";
import { usePathname } from 'next/navigation'; // Updated to use usePathname
import { initGA, logPageView } from '@/lib/ga/index';

const ClientLoadingLayout = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname(); // Use this instead of router.events

  useEffect(() => {
    // Initialize Google Analytics (GA)
    initGA();
    // Log the initial page view
    logPageView();

    // Log page views on pathname change (route change)
    logPageView();
  }, [pathname]); // Track route changes by watching pathname

  // Simulate a loading delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return isLoading ? <LoadingPage /> : (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default ClientLoadingLayout;
