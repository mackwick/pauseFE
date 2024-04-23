import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <nav>
        <Link to="/" className="link">
          Home
        </Link>
        <Link to="/index" className="link">
          All Pauses
        </Link>
      </nav>
      <Link to="/" className="link">
        <h1>Pause</h1>
      </Link>
    </div>
  );
}

export default Header;
