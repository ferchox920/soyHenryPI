import React from "react";

const FilterContinents = ({ onSelect }) => {
  const selectHandler = (e) => {
    const regionName = e.target.value;
    e.preventDefault();
    onSelect(regionName);
  };

  return (
    <select onChange={selectHandler}>
      <option className="option" value=''>Filter by Region</option>
      <option className="option" value="afr">
        Africa
      </option>
      <option className="option" value="ame">
        America
      </option>
      <option className="option" value="asi">
        Asia
      </option>
      <option className="option" value="eur">
        Europe
      </option>
      <option className="option" value="ocea">
        Oceania
      </option>
    </select>
  );
};

export default FilterContinents;
