import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <h1>Pause</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/index">All Pauses</Link>
      </nav>
    </div>
  );
}

export default Header;
