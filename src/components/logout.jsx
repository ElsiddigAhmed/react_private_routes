import React from "react";
// import { Link } from "react-router-dom";
import Navbar from "./navbar";
export const Logout = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <h2 className="item-container">
          You are now logged out, you can go to login page
        </h2>
      </div>
    </div>
  );
};
