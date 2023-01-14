
import {
  
  apiCountryByName,
  apiCountryByRegion,
  apiCountryByActivity,
} from "../../Redux/apiPetitions";
import SearchInput from "../Search/SearchInput";
import FilterContinents from "../FilterContinents/FilterContinents";

import AllCountries from "../AllCountries/AllCountries";
import FilterActivity from "../FilterActivity/FilterActivity";
import { useDispatch } from "react-redux";

const Home = () => {

  const dispatch= useDispatch()

  const getCountryByName = async (countryName) => {
    apiCountryByName(dispatch, countryName);
  };

  const getCountryByRegion = async (countryRegion) => {
    apiCountryByRegion(dispatch, countryRegion);
  };
  const getCountryByActivity = async (season) => {
    apiCountryByActivity(dispatch, season);
  };

  return (
    <div className="all__country__wrapper">
      <div className="country__top">
        <div className="search">
          <SearchInput onSearch={getCountryByName} />
        </div>

        <div className="filter">
          <FilterContinents onSelect={getCountryByRegion} />
        </div>
        <div className="filter">
          <FilterActivity onSelect={getCountryByActivity} />
        </div>
      </div>
      <AllCountries />
    </div>
  );
};

export default Home;
