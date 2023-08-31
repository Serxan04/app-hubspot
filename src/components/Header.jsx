import React, { Fragment } from "react";
import logo from "../img/logo-hubspot.svg";
import Button from "./Button";
const Header = () => {
  return (
    <Fragment>
      <nav className="navbar">
        <div className="flex-1">
          {" "}
          <img src={logo} alt="" className="logo" />
          <select className="links selects" name="" id="">
            <option value="">Software</option>
          </select>
          <a className="links selects" href="">
            Pricing
          </a>
          <select className="links selects" name="" id="">
            <option value="">Resources</option>
          </select>
        </div>
        <div className="flex-2">
          <Button class="btn-demo btn" ad="Get a demo" />
          <Button class="btn-free btn" ad="Get started free" />
        </div>
      </nav>
    </Fragment>
  );
};

export default Header;
