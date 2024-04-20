import Pause from "../components/Pause";
import { useLoaderData } from "react-router-dom";

const Index: React.FC = () => {
  const allPauses: any = useLoaderData();

  return (
    <div className="index">
      <h1>Your Meditation Sessions</h1>
      {allPauses.map((pause: any) => (
        <Pause
          date={pause.date}
          id={pause.id}
          length={pause.length}
          key={pause.id}
        />
      ))}
    </div>
  );
};

export default Index;
