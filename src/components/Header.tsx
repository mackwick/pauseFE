import { Link } from "react-router-dom";

function Header() {
  // const hamMenu = document.querySelector("hamburger-menu");
  // const offScreenMenu = document.querySelector("offscreen-menu");
  // hamMenu?.addEventListener("click", () => {
  //   hamMenu?.classList.toggle("active");
  //   offScreenMenu?.classList.toggle("active");
  // });

  return (
    <div className="header">
      <nav>
        <div className="offscreen-menu">
          <Link to="/" className="link">
            Home
          </Link>
          <Link to="/index" className="link">
            All Pauses
          </Link>
        </div>

        <div className="hamburger-menu">
          <label htmlFor="ham-toggle">
            <span></span>
            <span></span>
            <span></span>
          </label>
          <input type="checkbox" id="ham-toggle" />
        </div>
      </nav>
      <Link to="/" className="link">
        <h1>Pause</h1>
      </Link>
    </div>
  );
}

export default Header;
