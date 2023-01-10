import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { apiURL } from "../util/api";
import { Link } from "react-router-dom";

const CountryInfo = () => {
  const [country, setCountry] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const { countryName } = useParams();
  
  
  
  useEffect(() => {
    const getCountryByName = async () => {
      try {
        const res = await fetch(`http://localhost:3001/country/name?name=${countryName}`);

        if (!res.ok) throw new Error("Could not found!");

        const data = await res.json();

        setCountry(data);
        console.log('aqui');
        console.log(countryName);
        console.log(data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setError(error.message);
      }
    };

    getCountryByName();
  }, [countryName]);

  return (
    <div className="country__info__wrapper">
      <button>
        <Link to="/">Back</Link>
      </button>

<h1>tubarao</h1>
      

      {isLoading && !error && <h4>Loading........</h4>}
      {error && !isLoading && { error }}

      {country?.map((country, index) => (
        <div className="country__info__container" key={index}>
          <div className="country__info-img">
            <img src={country.flags} alt="" />
          </div>

          <div className="country__info">
            <h3>{country.name}</h3>

            <div className="country__info-left">
              <h5>
                Population:{" "}
                <span>
                  {new Intl.NumberFormat().format(country.population)}
                </span>
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
                Area: <span>{new Intl.NumberFormat().format(country.area)}</span>
              </h5>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CountryInfo;
