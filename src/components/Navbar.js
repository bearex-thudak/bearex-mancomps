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
        <Link to="/charts">Charts</Link> |{" "}
        <Link to="/dashboard">Dashboard</Link> |{" "}
        <Link to="/reports">Reports</Link> | <Link to="/tables">Tables</Link> |{" "}
        <Link to="/help">Help</Link>
      </nav>
    </div>
  );
};

export default Navbar;
