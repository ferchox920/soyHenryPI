import React, { useState } from "react";
import styles from "./Paginate.module.css";

const Paginate = ({ pagina, setPagina, max }) => {
  const [input, setInput] = useState(pagina);

  const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > Math.ceil(max) || isNaN(newPage)) {
      newPage = 1;
    }
    setInput(newPage);
    setPagina(newPage);
  };

  const handleInputKeyDown = (e) => {
    if (e.keyCode === 13) {
      handlePageChange(parseInt(e.target.value));
    }
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleNextPage = () => {
    const newPage = pagina + 1;
    handlePageChange(newPage);
  };

  const handleBackPage = () => {
    const newPage = pagina - 1;
    handlePageChange(newPage);
  };

  return (
    <div className={styles.container}>
      <button
        disabled={pagina <= 1}
        className={styles.button}
        onClick={handleBackPage}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          width={16}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>
      <input
        type="number"
        name="page"
        value={input}
        onChange={handleInputChange}
        onKeyDown={handleInputKeyDown}
        autoComplete="off"
        className={styles.input}
      />
      <p className={styles.pages}>de {Math.ceil(max)}</p>
      <button
        disabled={pagina >= max}
        className={styles.button}
        onClick={handleNextPage}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          width={16}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
    </div>
  );
};

export default Paginate;