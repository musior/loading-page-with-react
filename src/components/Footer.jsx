import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="box-container footer-info">
        <p className="footer-p">
          Nazwa firmy - wszelkie prawa zastrzeżone, 2019
        </p>
        <div className="footer-icons">
          <a href="/">
            <i className="fa-brands fa-instagram fa-2x"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-square-facebook fa-2x"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
