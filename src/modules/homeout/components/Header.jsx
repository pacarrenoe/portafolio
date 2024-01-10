import React from "react";
import { SvgGmail, SvgLinkedin, SvgTitle } from "../../helpers/Icons";
import "../styles/header.css";

const Header = () => {
  const alerta = () => {
    alert("Click de ancore");
  };

  return (
    <>
      <div className="container">
        <div className="header">
          <div className="header__logo">
            <SvgTitle />
            <div className="all__space" />
            <p>Patricia Carreño Esparza</p>
          </div>
          <div className="header__menu">
            <a>
              <p>Patricia Carreño Esparza</p>
            </a>
            <div className="all__space" />
            <a>
              <p>Patricia Carreño Esparza</p>
            </a>
            <div className="all__space" />
            <a>
              <p>Patricia Carreño Esparza</p>
            </a>
          </div>

          <div className="header__redes">
            <a href="*" target="_blank" rel="noreferrer" className="linkedin">
              <SvgLinkedin />
            </a>
            <div className="all__space" />
            <a href="*" target="_blank" rel="noreferrer" className="gmail">
              <SvgGmail />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
