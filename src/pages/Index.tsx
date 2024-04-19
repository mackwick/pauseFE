import Pause from "../components/Pause";
import { useLoaderData } from "react-router-dom";

function Index() {
  const allPauses: any = useLoaderData();

  return (
    <div className="index">
      <h1>Your Meditation Sessions</h1>
      {allPauses.map((pause: any, id: number) => (
        <Pause pause={pause} key={id} />
      ))}
    </div>
  );
}

export default Index;
