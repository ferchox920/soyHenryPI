import React, { useState } from "react";

import { apiPostAction } from "../../Redux/apiPetitions";

const Form = ({ params }) => {
  const [action, setNewActivity] = useState({
    name: "",
    duration: "",
    difficulty: "",
    season: "",
    countryId: params,
  });

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setNewActivity({
      ...action,
      [name]: value,
    });
  };

  const submitHandler = async function submitHandler(e) {
    e.preventDefault();
    console.log(action);
    apiPostAction(action);
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="name">Nombre de Actividad: </label>
      <br />
      <input
        type="text"
        id="name"
        name="name"
        value={action.name}
        onChange={handleChangeInput}
      />
      <br />
      <p>Duracion</p>

      <select
        name="duracion"
        value={action.duration}
        onChange={handleChangeInput}
      >
        <option>-----</option>
        <option>Quick</option>
        <option>Intermediate</option>
        <option>Long Time</option>
        <option>More to one Day</option>
      </select>
      <br />
      <p>Difficult</p>
      <select
        name="difficulty"
        value={action.difficulty}
        onChange={handleChangeInput}
      >
        <option>-----</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>
      <br />
      <p>SEASON</p>
      <select
        name="season"
        onChange={handleChangeInput}
        value={action.season}
      >
        <option>-----</option>
        <option>VERANO</option>
        <option>OTOÑO</option>
        <option>INVIERNO</option>
        <option>PRIMAVERA</option>
      </select>

      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
