import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Paginate from "../Paginate/Paginate";

const AllCountries = () => {
  const [pagina,setPagina ] = useState(1);
  const [porPagina,setPorPagina ] = useState(10);

  
  const allCountries = useSelector((state) =>
  state.country.countriesFilter
  );
  
  
  const max = allCountries.length/ porPagina;
  console.log(max);
 
  
  return (
    <>
      <div className="country__container">
        {allCountries?.slice((pagina-1)*porPagina,(pagina-1)*porPagina+porPagina).map((country) => (
          <Link to={`/country/id/${country.id}`} key={country.id}>
            <div className="country__card">
              <div className="country__img">
                <img src={country.flags} alt="" />
              </div>

              <div className="country__data">
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
      <div className="container__paginate">
      <Paginate pagina={pagina} setPagina={setPagina} max={max}/>
      </div>
    </>
  );
};

export default AllCountries;
