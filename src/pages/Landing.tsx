import Create1 from "../components/CreatePt1";
import Header from "../components/Header";

const Landing: React.FC = () => {
  return (
    <div>
      <Header />
      <div className="landing-container">
        <Create1 action="/create" method="post" buttontxt="Start time" />
      </div>{" "}
    </div>
  );
};

export default Landing;
