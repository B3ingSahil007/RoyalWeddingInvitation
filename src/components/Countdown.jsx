import React, { useState, useEffect } from 'react';

export const Countdown = ({ targetDate = '2026-10-24T11:00:00' }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    } else {
      timeLeft = null;
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (!timeLeft) {
    return (
      <div className="py-6 px-10 rounded-full bg-[#123C32]/80 border-2 border-[#D8B56A] shadow-[0_0_35px_rgba(216,181,106,0.4)] animate-pulse">
        <h3 className="font-serif text-2xl sm:text-4xl text-[#E8CF91] tracking-wider uppercase">
          ✦ Today is the day! ✦
        </h3>
      </div>
    );
  }

  const units = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds }
  ];

  return (
    <div className="grid grid-cols-4 gap-2 sm:gap-4 md:gap-6 my-6 sm:my-8 w-full max-w-xs sm:max-w-md mx-auto">
      {units.map((unit) => (
        <div
          key={unit.label}
          className="flex flex-col items-center justify-center w-full py-2.5 sm:py-5 px-1 sm:px-2 rounded-xl sm:rounded-2xl bg-[#0D2923]/80 border border-[#D8B56A]/40 backdrop-blur-md shadow-[0_8px_20px_rgba(0,0,0,0.5)] transition-all duration-300 hover:border-[#D8B56A] hover:scale-105"
        >
          <span className="font-serif text-2xl min-[360px]:text-3xl sm:text-5xl font-bold text-[#E8CF91] tracking-tight drop-shadow-md">
            {String(unit.value).padStart(2, '0')}
          </span>
          <span className="font-royal text-[8.5px] min-[360px]:text-[10px] sm:text-xs tracking-wider sm:tracking-[0.25em] uppercase text-[#D8B56A]/90 mt-0.5 sm:mt-1 font-semibold">
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  );
};
