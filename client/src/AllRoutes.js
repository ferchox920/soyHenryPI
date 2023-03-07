import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import CountryInfo from "./components/CountryInfo/CountryInfo";
import About from "./components/About/About";
import { apiAllCountry } from "./Redux/apiPetitions";

const AppRoutes = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      await apiAllCountry(dispatch);
    };

    fetchData();
  }, [dispatch]);

  const routes = {
    "/home": <Home />,
    "/country/id/:countryId": <CountryInfo />,
    "/about": <About />,
  };

  return (
    <>
      <NavBar />
      <div className="container">
        <Routes>
          {Object.entries(routes).map(([routePath, routeElement]) => (
            <Route key={routePath} path={routePath} element={routeElement} />
          ))}
        </Routes>
      </div>
    </>
  );
};

export default AppRoutes;
