import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { apiCountryById } from "../../Redux/apiPetitions";
import FormActivity from "../Form/FormActiviy";
import ModalForm from "../Modal/ModalForm";
import styles from "./CountryInfo.module.css";

const CountryInfo = () => {
  const { countryId } = useParams();
  const dispatch = useDispatch();

  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await apiCountryById(dispatch, countryId);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [dispatch, countryId]);

  const country = useSelector((state) => state.country.countryId);

  const handleShowForm = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <>
      <div className={styles.container}>
        <button className={styles.backButton}>
          <Link to="/Home" className={styles.backLink}>
            Back
          </Link>
        </button>

        <div className={styles.card}>
          <div className={styles.countryFlag}>
            {country && (
              <img
                src={country.flags}
                alt=""
                className={styles.countryFlagImg}
                loading="lazy"
              />
            )}
          </div>

          <div className={styles.countryDetails}>
            {country ? (
              <>
                <h3 className={styles.countryName}>{country.name}</h3>
                <div className={styles.countryDescription}>
                  <h5 className={styles.countryInfoRow}>
                    Population:{" "}
                    <span className={styles.countryInfoData}>
                      {new Intl.NumberFormat().format(country.population)}
                    </span>
                  </h5>
                  <h5 className={styles.countryInfoRow}>
                    Continent:{" "}
                    <span className={styles.countryInfoData}>
                      {country.continents}
                    </span>
                  </h5>
                  <h5 className={styles.countryInfoRow}>
                    Sub Region:{" "}
                    <span className={styles.countryInfoData}>
                      {country.subregion}
                    </span>
                  </h5>
                  <h5 className={styles.countryInfoRow}>
                    Capital:{" "}
                    <span className={styles.countryInfoData}>
                      {country.capital}
                    </span>
                  </h5>
                  <h5 className={styles.countryInfoRow}>
                    Area:{" "}
                    <span className={styles.countryInfoData}>
                      {new Intl.NumberFormat().format(country.area)}
                    </span>
                  </h5>
                </div>
              </>
            ) : (
              <p className={styles.noInfo}>No country information available</p>
            )}
          </div>
        </div>
        <button className={styles.showFormBtn} onClick={handleShowForm}>
          Show Form
        </button>
        <ModalForm show={showForm} onClose={handleCloseForm}>
          <FormActivity />
        </ModalForm>
      </div>
    </>
  );
};

export default CountryInfo;
