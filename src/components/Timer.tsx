import { useRef, useState, useEffect } from "react";

type Props = {
  seconds: number;
};

const Timer: React.FC<Props> = ({ seconds }) => {
  const [countdown, setCountdown] = useState(seconds);
  const time: any = useRef();

  useEffect(() => {
    time.current = setInterval(() => {
      setCountdown((prev: number) => prev - 1);
    }, 1000);
    return () => clearInterval(time.current);
  }, []);

  return (
    <div className="timer-container">
      <h2>Countdown: {countdown}</h2>
    </div>
  );
};

export default Timer;
