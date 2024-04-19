import { Link, useLoaderData, Form } from "react-router-dom";

function Show() {
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
      <Form action={`/update/${aPause.id}`} method="put">
        <label htmlFor="length">
          How many minutes did you meditate?
          <input
            type="number"
            name="length"
            id="length"
            defaultValue={aPause.length}
          />
        </label>
        <label htmlFor="before">
          How did you feel before?
          <input
            type="text"
            name="before"
            id="before"
            defaultValue={aPause.before}
          />
        </label>
        <label htmlFor="after">
          How did you feel after?
          <input
            type="text"
            name="after"
            id="after"
            defaultValue={aPause.after}
          />
        </label>
        <label htmlFor="thoughts">
          What thoughts came up?
          <input
            type="text"
            name="thoughts"
            id="thoughts"
            defaultValue={aPause.thoughts}
          />
        </label>
        <button>Update entry.</button>
      </Form>
      <Form action={`/delete/${aPause.id}`} method="post">
        <button>Delete</button>
      </Form>
      <hr />
      <Link to="/index">Go back.</Link>
    </div>
  );
}

export default Show;
