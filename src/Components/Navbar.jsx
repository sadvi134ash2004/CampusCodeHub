import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="container-nav">
      <p className="logo">CampusCodeHub</p>
      <ul>
        <Link to="/" style={{ textDecoration: "none" }}>
          <li>Home</li>
        </Link>
        <Link to="/about" style={{ textDecoration: "none" }}>
          <li>About</li>
        </Link>
        <Link to="/Login" style={{ textDecoration: "none" }}>
          <li>Login</li>
        </Link>
      </ul>
    </div>
  );
}

export default Navbar;
