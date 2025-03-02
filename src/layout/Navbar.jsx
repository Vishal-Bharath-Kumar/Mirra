import { Link } from "react-router-dom";
import Logo from "../assets/logos/96logo.png";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container container">
           <input type="checkbox" name="" id="" /> 
          <div className="hamburger-lines">
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
          </div>
          <ul className="menu-items">
            <li>             
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/packages">Packages</Link>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
          <img src={Logo} alt="icon" height={36} width={36} />
          <h1 className="logo">96 Holidays</h1>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
