import { Link } from "react-router-dom";

type Props = {
  date: string;
  id: number;
  length: number;
};

const Pause: React.FC<Props> = ({ date, id, length }) => {
  const splitDate: string = date.split("T")[0]; //"2024-04-18"
  const displayDate: string =
    splitDate.split("-")[1] +
    "." +
    splitDate.split("-")[2] +
    "." +
    splitDate.split("-")[0];

  return (
    <Link to={`/${id}`} className="pause">
      <h3>
        {length}-minute meditation on {displayDate}
      </h3>
    </Link>
  );
};

export default Pause;
