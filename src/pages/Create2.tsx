import { useLoaderData, Form } from "react-router-dom";
import Create2Form from "../components/CreatePt2";

const Create2: React.FC = () => {
  const aPause: any = useLoaderData();

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
