// components/Layout/ClientLoadingLayout.js

"use client";

import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";
import LoadingPage from "@/components/ui/LoadingPage";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from 'next/navigation'; // Updated to use usePathname
import { initGA, logPageView } from '@/lib/ga/index';

// List of static and dynamic routes to prefetch
const staticRoutesToPrefetch = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Support', path: '/support' },
];

const gameTitles = ['game1', 'game2', 'game3']; // Example game titles

const ClientLoadingLayout = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname(); // Use this instead of router.events
  const router = useRouter(); // Use router for prefetching

  useEffect(() => {
    // Initialize Google Analytics (GA)
    initGA();
    // Log the initial page view
    logPageView();

    // Log page views on pathname change (route change)
    logPageView();
  }, [pathname]); // Track route changes by watching pathname

  // Prefetch static and dynamic routes when the layout is loading
  useEffect(() => {
    // Prefetch static routes
    staticRoutesToPrefetch.forEach(route => {
      router.prefetch(route.path);
    });

    // Prefetch dynamic routes (games/[gameTitle])
    gameTitles.forEach(gameTitle => {
      router.prefetch(`/games/${gameTitle}`);
    });
  }, [router]);

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
