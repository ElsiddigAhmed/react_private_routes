import React from "react";
import { Link } from "react-router-dom";
import { login } from "../helpers";
import Navbar from "./navbar";

export const Login = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <h2 className="item-container">
          Login Page{" "}
          <Link to="home" onClick={login}>
            Login Now
          </Link>
        </h2>
      </div>
    </div>
  );
};
