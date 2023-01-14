import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import CountryInfo from "./components/CountryInfo/CountryInfo";
import { useDispatch } from "react-redux";
import { apiAllCountry } from "./Redux/apiPetitions";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  useEffect(() => apiAllCountry(dispatch), [dispatch]);

  return (
    <>
      <NavBar/>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/country/id/:countryId" element={<CountryInfo />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
