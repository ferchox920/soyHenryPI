import React from "react";
import style from "./styles/NavBar.module.css"

const Navbar = () => {
  return (
    <nav>
      <div className={style.mensaje}>
        <a  href="/">Rick and Morty</a>
      </div>
    </nav>
  );
};

export default Navbar;
