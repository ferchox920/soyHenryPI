import React from "react";
import {Link} from 'react-router-dom'

const NavBar = () => {
  return (
    <>
      <div className="header">
        <div className="container">
          <Link to={"/"}>
            <h5>Where in the world</h5>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavBar;
