import Create1 from "../components/CreatePt1";

const Landing: React.FC = () => {
  return (
    <div className="landing-container">
      <Create1 action="/create" method="post" buttontxt="Start time" />
    </div>
  );
};

export default Landing;
