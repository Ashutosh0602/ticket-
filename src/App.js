import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Summary from "./components/Summary/Summary";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/summary/:id" element={<Summary />} />
    </Routes>
  );
}

export default App;
