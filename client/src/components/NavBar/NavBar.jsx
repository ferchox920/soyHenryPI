import React from "react";
import { Link } from "react-router-dom";
import img from "../../img/error_icon.png";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <>
      <div className={styles.header}>
        <Link to={"/Home"} className={styles.logoLink}>
          <span className={styles.logo} role="heading" aria-level="1">
            Where in the world
          </span>
        </Link>
        <div className={styles.container}>
          <Link to={"/About"} title="About">
            <span>About</span>
          </Link>
        </div>
        <div className={styles.container}>
          <Link to={"/"} title="Home">
            <img
              className={styles.image}
              src={img}
              alt="Logo de Where in the world"
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavBar;
