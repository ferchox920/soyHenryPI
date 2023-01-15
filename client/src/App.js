import "./App.css";
import LandingPage from "./components/LandingPage/LandigPage.jsx";
import AllRoutes from "./AllRoutes";

import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/*" element={<AllRoutes />} />
      </Routes>
    </>
  );
}

export default App;
