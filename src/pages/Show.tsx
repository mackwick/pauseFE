import { Link, useLoaderData, Form } from "react-router-dom";
import Forms from "../components/Form";

const Show: React.FC = () => {
  const aPause: any = useLoaderData();
  const date: string = aPause.date.split("T")[0];
  const displayDate: string =
    date.split("-")[1] + "." + date.split("-")[2] + "." + date.split("-")[0];
  return (
    <div className="show">
      <h1>
        {aPause.length} minute meditation on {displayDate}
      </h1>
      <h2>
        <b>Feelings before: </b>
        {aPause.before}
      </h2>
      <h2>
        <b>Feelings after: </b>
        {aPause.after}
      </h2>
      <h3>What came up during this session:</h3>
      <p>{aPause.thoughts}</p>
      <hr />
      <h3>Actions</h3>
      <Forms
        action={`/update/${aPause.id}`}
        method="put"
        buttontxt="Update Pause"
        defaultval_after={aPause.after}
        defaultval_before={aPause.before}
        defaultval_length={aPause.length}
        defaultval_thoughts={aPause.thoughts}
      />
      <Form action={`/delete/${aPause.id}`} method="post">
        <button>Delete</button>
      </Form>
      <hr />
      <Link to="/index">Go back.</Link>
    </div>
  );
};

export default Show;
