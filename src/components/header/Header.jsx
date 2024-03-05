import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/bi.jpg";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header-container">
        <div className="content">
          <div className="text-container">
            <h5>Hi, I'm</h5>
            <h3>Rohit Bharti</h3>
            <div className="description">
              Passionate Full Stack Developer
            </div>
            <CTA />
            {/* <HeaderSocials /> */}
          </div>
          <div className="image-container">
            <div className="me">
              <div className="img-container ">
                <img src="https://ik.imagekit.io/aq3ybtarw/team/hero.jpg?updatedAt=1708269716303" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
