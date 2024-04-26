import { useLoaderData } from "react-router-dom";
import Create2Form from "../components/CreatePt2";
import tone from "../assets/zen-tone-mid-high-202557.mp3";
import { useEffect } from "react";
import Header from "../components/Header";

const Create2: React.FC = () => {
  const aPause: any = useLoaderData();

  const play = () => {
    new Audio(tone).play();
  };

  useEffect(() => {
    play();
  }, [Create2Form]);

  return (
    <div>
      <Header />
      <div className="create2-page">
        <Create2Form
          action={`/create2/${aPause.id}`}
          method="put"
          buttontxt="Log Session"
          defaultval_after={""}
          defaultval_before={aPause.before}
          defaultval_length={aPause.length}
          defaultval_thoughts={""}
        />
      </div>
    </div>
  );
};

export default Create2;
