import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import CountryInfo from "./components/CountryInfo/CountryInfo";
import About from "./components/About/About";
import { useDispatch } from "react-redux";
import { apiAllCountry } from "./Redux/apiPetitions";
import { useEffect } from "react";

const AllRoutes =   ()=> {
  const dispatch = useDispatch();
  useEffect(async() =>await apiAllCountry(dispatch), [dispatch]);

  return (
    <>
      <NavBar/>
      <div className="container">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/country/id/:countryId" element={<CountryInfo />} />
          <Route path="/About" element={<About />} />

        </Routes>
      </div>
    </>
  );
}

export default AllRoutes;
