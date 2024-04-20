import Forms from "../components/Form";
import Timer from "../components/Timer";
import { Form } from "react-router-dom";

const Landing: React.FC = () => {
  return (
    <div className="landing-container">
      <h1>Take a Pause</h1>
      <Forms
        action="/create"
        method="post"
        buttontxt="Add Pause"
        defaultval_after=""
        defaultval_before=""
        defaultval_length=""
        defaultval_thoughts=""
      />
      <hr />
      <Form>
        <input type="number" className="timesetter" />
        <button
          onClick={(event): any => {
            event.preventDefault();
          }}
        >
          Set timer
        </button>
      </Form>

      <Timer seconds={66} />
    </div>
  );
};

export default Landing;
