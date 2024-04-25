import { useRef, useState, useEffect } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

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
  const [countdown, setCountdown] = useState(NaN);
  const time: any = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    const sortedPauses: any = allPauses.sort((a: any, b: any) => {
      return a.id - b.id;
    });
    const newPause: any = sortedPauses[sortedPauses.length - 1];
    if (newPause) {
      setCountdown(newPause.length * 60);
    }
    time.current = setInterval(() => {
      setCountdown((prev: number) => prev - 1);
    }, 1000);
    return () => clearInterval(time.current);
  }, [allPauses]);

  useEffect(() => {
    if (countdown <= 0) {
      clearInterval(time.current);
      const newPause: any = allPauses[allPauses.length - 1];
      if (newPause) {
        navigate(`/create2/${newPause.id}`);
      }
    }
  }, [countdown, allPauses, navigate]);

  return (
    <div className="timer-container">
      <h2>{formatTime(countdown)}</h2>
    </div>
  );
};

export default Timer;
