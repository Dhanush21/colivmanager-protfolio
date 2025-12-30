import { useEffect, useRef } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { trackScrollDepth, trackTimeOnPage } from "@/lib/analytics";

const Index = () => {
  const trackedDepths = useRef<Set<number>>(new Set());
  const startTime = useRef<number>(Date.now());
  const trackedTimes = useRef<Set<number>>(new Set());

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = Math.round((scrollTop / docHeight) * 100);

      const thresholds = [25, 50, 75, 100];
      thresholds.forEach((threshold) => {
        if (scrollPercent >= threshold && !trackedDepths.current.has(threshold)) {
          trackedDepths.current.add(threshold);
          trackScrollDepth(threshold, window.location.pathname);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timeThresholds = [30, 60, 120, 300]; // 30s, 1m, 2m, 5m
    
    const interval = setInterval(() => {
      const elapsedSeconds = Math.floor((Date.now() - startTime.current) / 1000);
      
      timeThresholds.forEach((threshold) => {
        if (elapsedSeconds >= threshold && !trackedTimes.current.has(threshold)) {
          trackedTimes.current.add(threshold);
          trackTimeOnPage(threshold, window.location.pathname);
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Features />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
