import React, { Fragment } from "react";
import Button from "./Button";
import sekil from "../img/main-img.webp";
const Main = () => {
  return (
    <Fragment>
      <main className="main">
        <div>
          <p className="main-title main-c">Grow better with HubSpot</p>
          <p className="main-p main-c">
            Software that's powerful, not overpowering. Seamlessly connect your
            data, teams, and customers on one CRM platform that grows with your
            business.
          </p>
          <div className="buttons-main">
            <Button ad="Get a demo" class="demo-main" />
            <Button ad="Get started free" class="free-main" />
          </div>
          <p className="p-button main-c">
            Get a demo of our premium software, or get started with free tools.
          </p>
        </div>
        <div>
          <img className="img-main" src={sekil} alt="main-img" />
        </div>
      </main>
    </Fragment>
  );
};

export default Main;
