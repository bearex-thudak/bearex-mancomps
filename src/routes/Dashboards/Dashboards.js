import "./Dashboards.css";
import { React } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import idashboard from "../../assets/idashboard.png";
import ReactDOM from "react-dom";
import Iframe from "react-iframe";

const Dashboards = () => {
  return (
    <div>
      {/* <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/5qap5aO4i9A"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe> */}
      <iframe
        src="https://www.bearex.com/idashboards/viewer?guestuser=guest&dashID=1438"
        height=""
        width=""
      ></iframe>
    </div>
  );
};

export default Dashboards;
