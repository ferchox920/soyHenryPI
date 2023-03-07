import React, { useState, useEffect, useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { apiCountryById } from "../../Redux/apiPetitions";

const CountryInfo = () => {
  const { countryId } = useParams();

  const dispatch = useDispatch();
  useEffect(() => apiCountryById(dispatch, countryId), [dispatch, countryId]);

  const { country } = useSelector((state) => state);

  const [showForm, setShowForm] = useState(false);

  const toggleForm = useCallback(() => {
    setShowForm((showForm) => !showForm);
  }, []);

  const formattedPopulation = useMemo(
    () => new Intl.NumberFormat().format(country.population),
    [country.population]
  );

  const formattedArea = useMemo(
    () => new Intl.NumberFormat().format(country.area),
    [country.area]
  );

  return (
    <>
      <button>
        <Link to="/Home">Back</Link>
      </button>

      <img src={country.flags} alt="" />

      <h3>{country.name}</h3>

      <div>
        <h5>
          Population: <span>{formattedPopulation}</span>
        </h5>
        <h5>
          Continent: <span>{country.continents}</span>
        </h5>
        <h5>
          Sub Region: <span>{country.subregion}</span>
        </h5>
        <h5>
          Capital: <span>{country.capital}</span>
        </h5>
        <h5>
          Area: <span>{formattedArea}</span>
        </h5>
      </div>
    </>
  );
};

export default CountryInfo;
