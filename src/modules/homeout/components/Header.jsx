import React from "react";
import { SvgGmail, SvgLinkedin } from "../../helpers/icons";
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
            <img src="" alt="icono" />
            <p>Patricia Carreño Esparza</p>
          </div>
          <div className="header__menu">
            <a href="#">
              <p>Patricia Carreño Esparza</p>
            </a>
            <a href="#">
              <p>Patricia Carreño Esparza</p>
            </a>
            <a href="#">
              <p>Patricia Carreño Esparza</p>
            </a>
          </div>
          <div className="header__redes">
            <a href="#">
              <SvgLinkedin />
            </a>
            <a href="#">
              <SvgGmail />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
