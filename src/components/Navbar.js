import "./Navbar.css";
import { Link, Outlet } from "react-router-dom";
import bxlogo from "../assets/logo-tagline.webp";

const Navbar = () => {
  return (
    <div className="Navbar">
      <nav>
        <Link to="/">
          <img src={bxlogo} alt="bxlogo" />
        </Link>
        <ul className="navlinks">
          <li>
            <Link to="/charts">Charts</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/reports">Reports</Link>
          </li>
          <li>
            <Link to="/tables">Tables</Link>
          </li>
          <li>
            <Link to="/help">Help</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
