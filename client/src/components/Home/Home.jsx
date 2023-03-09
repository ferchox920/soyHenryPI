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
import styles from "./Home.module.css";

const Home = () => {
  const dispatch = useDispatch();

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
    <>
   <div className={styles.filters}>
  <SearchInput onSearch={getCountryByName} className={styles["search-input"]} />
  <FilterContinents onSelect={getCountryByRegion} className={styles["filter-continent"]} />
  <FilterActivity onSelect={getCountryByActivity} className={styles["filter-activity"]} />
</div>

      <AllCountries />
    </>
  );
};

export default Home;
