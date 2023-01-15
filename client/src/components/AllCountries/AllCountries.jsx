import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const AllCountries = () => {
  const [count, setCount] = useState(1);

  if (count === 0) {
    var a = 0;
    var b = 9;
  } else {
    var a = count * 10;
    var b = count * 10 + 10;
  }
  const pag = count + 1;

  const allCountries = useSelector((state) =>
    state.country.countriesFilter.slice(a, b)
  );

  return (
    <>
    <div className="country__container">
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
      <div className="container_button_p">

      <button
      className="page__button"
        onClick={() => {
          if (count !== 0) {
            setCount(count - 1);
          }
        }}
        >
        -
      </button>
      
      

      <div>{pag}</div>
     

      <button
      className="page__button"
        onClick={() => {
          if (count < 24) {
            setCount(count + 1);
          }
        }}
        >
        +
      </button>
        </div>
          </>
  );
};

export default AllCountries;
