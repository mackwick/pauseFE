import { Link } from "react-router-dom";

function Pause({ pause }: any) {
  const date: string = pause.date.split("T")[0];
  const displayDate: string =
    date.split("-")[1] + "." + date.split("-")[2] + "." + date.split("-")[0];

  return (
    <Link to={`/${pause.id}`} className="pause">
      <h3>
        {pause.length} minute meditation on {displayDate}
      </h3>
    </Link>
  );
}

export default Pause;
