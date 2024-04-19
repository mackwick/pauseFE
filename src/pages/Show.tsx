import { useLoaderData } from "react-router-dom";

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
    </div>
  );
}

export default Show;
