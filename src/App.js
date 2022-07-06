import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Help from "./routes/Help/Help";
import Tables from "./routes/Tables/Tables";
import Charts from "./routes/Charts/Charts";
import Dashboard from "./routes/Dashboard/Dashboard";
import Reports from "./routes/Reports/Reports";
import Main from "./components/Main";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="help" element={<Help />}></Route>
          <Route path="tables" element={<Tables />}></Route>
          <Route path="charts" element={<Charts />}></Route>
          <Route path="dashboard" element={<Dashboard />}></Route>
          <Route path="reports" element={<Reports />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
