import "./Navbar.css";
import { Link } from "react-router-dom";
import bxlogo from "../assets/logo-tagline.webp";
import { Card } from "react-bootstrap";

const Navbar = () => {
  return (
    <div className="navlinks-container">
      <nav>
        <ul className="navlinks">
          <li>
            <Link to="/charts">Charts</Link>
          </li>
          <li>
            <Link to="/dashboards">Dashboards</Link>
          </li>
          <li>
            <Link to="/reports">Reports</Link>
          </li>
          <li>
            <Link to="/tables">Tables</Link>
          </li>
          <li>
            <Link to="/forms">Forms</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
<div className="navlinks-container">
  <nav className="navbuttons">
    <ul className="navlinks">
      <li>
        <Link to="/charts">
          <Card>
            <Card.Img variant="top" src={bxlogo} />
            <Card.Body>
              {/* <Card.Title>Card Title</Card.Title> */}
              <Card.Text>Show me charts</Card.Text>
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
          </Card>
        </Link>
      </li>
      <li>
        <Link to="/dashboard">
          {" "}
          <Card>
            <Card.Img variant="top" src={bxlogo} />
            <Card.Body>
              {/* <Card.Title>Card Title</Card.Title> */}
              <Card.Text>Show me dashboards</Card.Text>
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
          </Card>
        </Link>
      </li>
      <li>
        <Link to="/reports">
          {" "}
          <Card>
            <Card.Img variant="top" src={bxlogo} />
            <Card.Body>
              {/* <Card.Title>Card Title</Card.Title> */}
              <Card.Text>Show me reports</Card.Text>
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
          </Card>
        </Link>
      </li>
      <li>
        <Link to="/tables">
          {" "}
          <Card>
            <Card.Img variant="top" src={bxlogo} />
            <Card.Body>
              {/* <Card.Title>Card Title</Card.Title> */}
              <Card.Text>Show me tables</Card.Text>
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
          </Card>
        </Link>
      </li>
      <li>
        <Link to="/help">Help</Link>
      </li>
    </ul>
  </nav>
</div>;
