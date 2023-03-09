import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Paginate from "../Paginate/Paginate";
import styles from './AllCountries.module.css';

const AllCountries = () => {
  const [pagina, setPagina] = useState(1);
  const [porPagina, setPorPagina] = useState(10);

  const countries = useSelector((state) => state.country.countriesFilter);

  // Ordenar los países en orden alfabético por el nombre
  const allCountries = [...countries].sort((a, b) => (a.name > b.name ? 1 : -1));

  const max = allCountries.length / porPagina;

  return (
    <>
      <div className={styles.country__container}>
        {allCountries
          ?.slice((pagina - 1) * porPagina, (pagina - 1) * porPagina + porPagina)
          .map((country) => (
            <Link to={`/country/id/${country.id}`} key={country.id}>
              <div className={styles.country__card}>
                <div className={styles.country__img}>
                  <img src={country.flags} alt="" />
                </div>

                <div className={styles.country__data}>
                  <h3>{country.name}</h3>
                  <h6>
                    {" "}
                    Population:{" "}
                    {new Intl.NumberFormat().format(country.population)}
                  </h6>
                  <h6> Sub-Region: {country.subregion}</h6>
                  <h6>Capital: {country.capital}</h6>
                </div>
              </div>
            </Link>
          ))}
      </div>
      <br />
      <div className={styles.container__paginate}>
        <Paginate pagina={pagina} setPagina={setPagina} max={max} />
      </div>
    
    </>
  );
};

export default AllCountries;
