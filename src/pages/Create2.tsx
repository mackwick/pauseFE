import { useLoaderData } from "react-router-dom";
import Create2Form from "../components/CreatePt2";
import tone from "../assets/zen-tone-mid-high-202557.mp3";
import { useEffect } from "react";

const Create2: React.FC = () => {
  const aPause: any = useLoaderData();

  const play = () => {
    new Audio(tone).play();
  };

  useEffect(() => {
    play();
  }, [Create2Form]);

  return (
    <div className="create2">
      <Create2Form
        action={`/create2/${aPause.id}`}
        method="put"
        buttontxt="Update Pause"
        defaultval_after={""}
        defaultval_before={aPause.before}
        defaultval_length={aPause.length}
        defaultval_thoughts={""}
      />
    </div>
  );
};

export default Create2;
