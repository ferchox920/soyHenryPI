import React, { useState } from "react";
import img from "../../icons/search.svg";
import styles from "./SearchInput.module.css";

const SearchInput = ({ onSearch }) => {
  const [input, setInput] = useState("");

  const submitHandler = (e) => {
    onSearch(e);
  };

  return (
    <div className={styles.container}>
      <div className={styles.iconWrapper}>
        <img src={img} alt="" className={styles.icon} />
      </div>
      <input
        type="text"
        placeholder="Search a country......"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
          submitHandler(e.target.value);
        }}
        className={styles.input}
      />
    </div>
  );
};

export default SearchInput;
