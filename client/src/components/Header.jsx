import React from "react";
import style from "./styles/Header.module.css";

const Header = () => {
  return (
    <>
      <div className={style.header}>
        <header className={style.countainer}>
          <h5>Where in the World?</h5>
        </header>
      </div>
    </>
  );
};

export default Header;
