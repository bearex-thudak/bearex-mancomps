import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Help from "./routes/Help/Help";
import Tables from "./routes/Tables/Tables";
import Charts from "./routes/Charts/Charts";
import Dashboards from "./routes/Dashboards/Dashboards";
import Reports from "./routes/Reports/Reports";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Headerlogo from "./components/Headerlogo";
import Forms from "./components/Forms/Forms";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Headerlogo />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="help" element={<Help />}></Route>
          <Route path="tables" element={<Tables />}></Route>
          <Route path="charts" element={<Charts />}></Route>
          <Route path="dashboards" element={<Dashboards />}></Route>
          <Route path="forms" element={<Forms />}></Route>
          <Route path="reports" element={<Reports />}></Route>
        </Routes>{" "}
        <Navbar />
      </BrowserRouter>
    </div>
  );
}

export default App;
