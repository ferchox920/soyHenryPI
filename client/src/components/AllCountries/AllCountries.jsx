
import { useSelector } from "react-redux";
import {Link} from "react-router-dom";


const AllCountries = () => {

  
  const allCountries = useSelector((state) => state.country.countriesFilter);

  return (
    <div className="country__bottom">
      {allCountries?.map((country) => (
        <Link to={`/country/id/${country.id}`} key={country.id}>
          <div className="country__card">
            <div className="country__img">
              <img src={country.flags} alt="" />
            </div>

            <div className="country__data">
              <h3>{country.name}</h3>
              <h6>
                {" "}
                Population: {new Intl.NumberFormat().format(country.population)}
              </h6>
              <h6> Sub-Region: {country.subregion}</h6>
              <h6>Capital: {country.capital}</h6>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default AllCountries;
