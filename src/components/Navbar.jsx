import React from "react";
import Icons from "./Icons";
import { Fragment } from "react";
import User from "./User";
import Logo from "./Logo";
const Navbar = () => {
  return (
    <Fragment>
      <nav className="navbar">
        <div className="flex-1">
          <div className="user">
            <label htmlFor="lang">
              <Icons />
            </label>
            <select id="lang" className="select-navbar">
              <option value="">Eng</option>
              <option value="">Ru</option>
            </select>
          </div>
          <div className="user">
            <User />
            <a className="user-logo" href="#">
              Contact Sales
            </a>
          </div>
        </div>
        <div className="flex-2">
          <button className="search">
            <Logo />
          </button>
          <a href="#" className="links">
            Log in
          </a>
          <a href="#" className="links">
            Customer Support
          </a>
          <select name="" id="" className="select-navbar">
            <option value="">About </option>
            <option value="">About Us</option>
            <option value="">Careers</option>
          </select>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
