import { Link } from "react-router-dom";

type Props = {
  date: string;
  id: number;
  length: number;
  before: string;
  after: string;
};

const Pause: React.FC<Props> = ({ date, id, length, before, after }) => {
  const splitDate: string = date.split("T")[0]; //"2024-04-18"
  const displayDate: string =
    splitDate.split("-")[1] +
    "." +
    splitDate.split("-")[2] +
    "." +
    splitDate.split("-")[0];

  return (
    <div className="pause">
      <Link to={`/${id}`} className="link">
        <p>
          {displayDate} ({length}-minutes):
        </p>
        <p>
          From "{before}" to "{after}"
        </p>
      </Link>
    </div>
  );
};

export default Pause;
