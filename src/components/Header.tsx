import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <h1>Pause</h1>
      </Link>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/index">All Pauses</Link>
      </nav>
    </div>
  );
}

export default Header;
