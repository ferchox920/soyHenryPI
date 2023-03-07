import React, { useState } from "react";
import styles from "./Form.module.css";

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
    
    alert('The activity has been created successfully')
    
    apiPostAction(action);
  };

  return (
    <div className={styles.container}>
      <form onSubmit={submitHandler}>
        <label className={styles.label} htmlFor="name">Nombre de Actividad: </label>
        <br />
        <br />
        <input
          className={styles.input}
          type="text"
          id="name"
          name="name"
          value={action.name}
          onChange={handleChangeInput}
        />
        <br />
        <p className={styles.text}>Duracion</p>

        <select
          className={styles.select}
          name="duration"
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
        <p className={styles.text}>Difficult</p>
        <select
          className={styles.select}
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
        <p className={styles.text}>SEASON</p>
        <select
          className={styles.select}
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
        <br />
        <button className={styles.button} type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
