import React from "react";

const Navbar = () => {
  return (
    <nav className="nav-panel">
      <div className="box-container nav-panel">
        <p className="nav-panel-company">Moja firma</p>
        <ul className="nav-panel-navigation">
          <li>
            <a href="#about-us">O nas</a>
          </li>
          <li>
            <a href="#offer">Oferta</a>
          </li>
          <li>
            <a href="/" id="contact">
              Kontakt
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
