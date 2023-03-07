import React from "react";

const FilterActivity = ({ onSelect }) => {
  const selectHandler = (e) => {
    const season = e.target.value;
    onSelect(season);
  };

  return (
    <select onChange={selectHandler}>
      <option value="">Filter by Season Activities</option>
      <option value="VERANO">Verano</option>
      <option value="OTOÑO">Otoño</option>
      <option value="INVIERNO">Invierno</option>
      <option value="PRIMAVERA">Primavera</option>
    </select>
  );
};

export default FilterActivity;
