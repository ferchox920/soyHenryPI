import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { apiPostAction } from "../../Redux/apiPetitions";

const Form = () => {
  const dispatch = useDispatch()
  const [newActivity, setNewActivity] = useState({
    name: null,
    duracion:null,
    difficulty:null,
    season:null,
    
  });

  const [input, setInput] = useState("");
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(apiPostAction())
  };
  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="name">Nombre de Actividad: </label>
      <br />
      <input
        type="text"
        id="name"
        name="name"
        value={input}
        onChange={handleChange}
      />
      <br />
      <p>Duracion</p>

      <select name="duracion">
        <option value="">-----</option>
        <option value="quick">Quick</option>
        <option value="intermediate">Intermediate</option>
        <option value="longTime">Long Time</option>
        <option value="mtod">More to one Day</option>
      </select>
      <br />
      <p>Difficult</p>
      <input type="radio" name="difficulty" id="1" value="1" />
      <label htmlFor="1">1</label>
      <input type="radio" name="difficulty" id="2" value="2" />
      <label htmlFor="2">2</label>
      <input type="radio" name="difficulty" id="3" value="3" />
      <label htmlFor="3">3</label>
      <input type="radio" name="difficulty" id="4" value="4" />
      <label htmlFor="4">4</label>
      <input type="radio" name="difficulty" id="5" value="5" />
      <label htmlFor="5">5</label>
      <br />
      <p>SEASON</p>
      <select name="season" defaultValue="">
        <option value="">-----</option>
        <option value="VERANO">VERANO</option>
        <option value="OTOÑO">OTOÑO</option>
        <option value="INVIERNO">INVIERNO</option>
        <option value="PRIMAVERA">PRIMAVERA</option>
      </select>


      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
