import "./Dashboard.css";
import { React, Iframe } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import idashboard from "../../assets/idashboard.png";
import ReactDOM from "react-dom";

const Dashboard = () => {
  return (
    <iframe
      src="https://www.bearex.com/idashboards/viewer?guestuser=guest&dashID=1438"
      width={1000}
      height={500}
    ></iframe>
  );
};

// const Dashboard = () => {
//   return (
//     <div className="Dashboard">
//       <iframe
//         src="www.bearex.com/idashboards/viewer?guestuser=guest&dashID=1438"
//         sandbox=""
//       ></iframe>
//     </div>
//   );
// };

export default Dashboard;
