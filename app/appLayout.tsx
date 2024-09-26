// components/Layout/ClientLoadingLayout.js

"use client";

import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";
import LoadingPage from "@/components/ui/LoadingPage";
import { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import { initGA, logPageView } from '@/lib/ga/index';

const ClientLoadingLayout = ({ children }: { children: React.ReactNode })  => {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Initialize GA
    initGA();
    // Log initial page view
    logPageView();

    // Handle route changes
    const handleRouteChange = () => {
      logPageView();
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

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