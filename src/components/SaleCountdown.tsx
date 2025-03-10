
import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface SaleCountdownProps {
  endDate: Date;
}

export function SaleCountdown({ endDate }: SaleCountdownProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = endDate.getTime() - new Date().getTime();
      
      if (difference <= 0) {
        return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        };
      }
      
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    };

    setTimeLeft(calculateTimeLeft());
    
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [endDate]);

  return (
    <div className="px-4 py-2 sm:px-0">
      <div className="flex items-center justify-center space-x-1 sm:space-x-2 text-sm sm:text-base">
        <span className="text-muted-foreground">Sale Ends in:</span>
        <div className="flex items-center">
          <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-primary/10 backdrop-blur-sm rounded-md">
            <span className="font-semibold text-primary">
              {String(timeLeft.days).padStart(2, "0")}
            </span>
          </div>
          <span className="mx-1 text-primary">:</span>
          <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-primary/10 backdrop-blur-sm rounded-md">
            <span className="font-semibold text-primary">
              {String(timeLeft.hours).padStart(2, "0")}
            </span>
          </div>
          <span className="mx-1 text-primary">:</span>
          <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-primary/10 backdrop-blur-sm rounded-md">
            <span className="font-semibold text-primary">
              {String(timeLeft.minutes).padStart(2, "0")}
            </span>
          </div>
          <span className="mx-1 text-primary">:</span>
          <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-primary/10 backdrop-blur-sm rounded-md">
            <span className="font-semibold text-primary">
              {String(timeLeft.seconds).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
