import React from "react";
import {Link} from 'react-router-dom'
import img from "../../img/error_icon.png";
import styles from './NavBar.module.css'

const NavBar = () => {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.container}>
          <Link to={"/Home"}>
            <h2>Where in the world</h2>
          </Link>
        </div>
        <div className={styles.container}>
          <Link to={"/About"}>
            <h3>About</h3>
          </Link>
        </div>
        <div className={styles.container}>
          <Link to={"/"}>
          <img
          className={styles.image}
              src={img}
              alt="Earth img"
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavBar;
