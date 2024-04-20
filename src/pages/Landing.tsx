import Forms from "../components/Form";

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
    </div>
  );
};

export default Landing;
