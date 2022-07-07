import "./Headerlogo.css";
import { Link } from "react-router-dom";
import bxlogo from "../assets/logo-tagline.webp";

const Headerlogo = () => {
  return (
    <div className="Headerlogo">
      {" "}
      <Link to="/">
        <img src={bxlogo} alt="bxlogo" />
      </Link>
      <div className="header-text">Manufacturer's Comparative</div>
    </div>
  );
};

export default Headerlogo;
