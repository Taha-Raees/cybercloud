"use client";
import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";
import LoadingPage from "@/components/ui/LoadingPage";
import { useState, useEffect } from "react";

// Client-Side Layout Component to handle loading
const ClientLoadingLayout = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  // Render the loading screen or the actual content
  return isLoading ? <LoadingPage /> : <>
  <Navbar/>
  {children}
  <Footer/>
  </>;
};

export default ClientLoadingLayout;
