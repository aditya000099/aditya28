import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './race.css';

gsap.registerPlugin(ScrollTrigger);

const RaceScroller: React.FC = () => {
  const racesRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!racesRef.current) return;

    const races = racesRef.current;

    const getScrollAmount = () => {
      const racesWidth = races.scrollWidth;
      return -(racesWidth - window.innerWidth);
    };

    const tween = gsap.to(races, {
      x: getScrollAmount(),
      duration: 5,
      ease: 'none',
    });

    ScrollTrigger.create({
      trigger: '.racesWrapper',
      start: 'top 20%',
      end: `+=${Math.abs(getScrollAmount())}`,
      pin: true,
      animation: tween,
      scrub: 1,
      invalidateOnRefresh: true,
      markers: true,
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      tween.kill();
    };
  }, []);

  return (
    <div>
      <div className="space-50vh lightBG"></div>

      <div className="racesWrapper">
        <div className="races" ref={racesRef}>
          <h2>Monaco</h2>
          <h2>Austria</h2>
          <h2>Hungary</h2>
          <h2>Netherlands</h2>
          <h2>Japan</h2>
        </div>
      </div>

      <div className="space-100vh lightBG"></div>
    </div>
  );
};

export default RaceScroller;
