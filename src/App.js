import "./App.css";
import Help from "./components/Help/Help";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Reports from "./components/Reports/Reports";
import Dashboard from "./components/Dashboard/Dashboard";
import Charts from "./components/Charts/Charts";
import Tables from "./components/Tables/Tables";

function App() {
  return (
    <div className="wrapper">
      <h1>Mancomps from Bearex</h1>
      <p>Hello, World! - Bearex</p>
      <BrowserRouter>
        <Routes>
          <Route path="/help" element={<Help />}></Route>
          <Route path="/tables" element={<Tables />}></Route>
          <Route path="/charts" element={<Charts />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/reports" element={<Reports />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
