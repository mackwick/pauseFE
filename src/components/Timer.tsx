import { useRef, useState, useEffect } from "react";
import { redirect, useLoaderData } from "react-router-dom";

const formatTime = (time: number) => {
  let minutes: number | string = Math.floor(time / 60);
  let seconds: number | string = Math.floor(time - minutes * 60);

  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  return minutes + ":" + seconds;
};

const Timer: React.FC = () => {
  const allPauses: any = useLoaderData();
  const newPause = allPauses[allPauses.length - 1];
  const [countdown, setCountdown] = useState(newPause.length * 60);
  const time: any = useRef();

  useEffect(() => {
    time.current = setInterval(() => {
      setCountdown((prev: number) => prev - 1);
    }, 1000);
    return () => clearInterval(time.current);
  }, []);

  useEffect(() => {
    if (countdown <= 0) {
      clearInterval(time.current);
      redirect("/");
    }
  });

  return (
    <div className="timer-container">
      <h2>Countdown: {formatTime(countdown)}</h2>
    </div>
  );
};

export default Timer;
