import Form from "../Form/Form";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { apiCountryById } from "../../Redux/apiPetitions";

const CountryInfo = () => {
  const { countryId } = useParams();

  const dispatch = useDispatch();
  useEffect(() => apiCountryById(dispatch, countryId), [dispatch, countryId]);
  const country = useSelector((state) => state.country.countryId);

  return (
    <>
      <div className="country__info__wrapper">
        <button>
          <Link to="/Home">Back</Link>
        </button>

        <div className="country__info__container">
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
                Area:{" "}
                <span>{new Intl.NumberFormat().format(country.area)}</span>
              </h5>

              {country.activities ? (
                <h5>
                  {country.activities.map((activity, index) => (
                    <div className="country__info__container" key={index + 100}>
                      <div className="country__info">
                        <div className="country__info-left">
                          <br />
                          <h3>Actividad:</h3>
                          <h5> {activity.name}</h5>
                          <h5>Duracion Estimada: {activity.duration}</h5>
                          <h5>Difficulty: {activity.difficulty}</h5>
                          <h5>Season: {activity.season}</h5>
                        </div>
                      </div>
                    </div>
                  ))}
                </h5>
              ) : undefined}
            </div>
          </div>
        </div>
      </div>
      <Form params={countryId} />
    </>
  );
};

export default CountryInfo;
