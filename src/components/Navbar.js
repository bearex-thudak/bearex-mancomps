import "./Navbar.css";
import { Link, Outlet } from "react-router-dom";
import bxlogo from "../assets/logo-tagline.webp";

const Navbar = () => {
  return (
    <div className="Navbar">
      <nav>
        <img src={bxlogo} alt="bxlogo" />
        <Link to="/charts">Charts</Link> |{" "}
        <Link to="/dashboard">Dashboard</Link> |{" "}
        <Link to="/reports">Reports</Link> | <Link to="/Charts">Tables</Link> |{" "}
        <Link to="/help">Help</Link>
      </nav>
    </div>
  );
};

export default Navbar;
