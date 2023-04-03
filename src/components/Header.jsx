import React from "react";

const Header = () => {
  const handleClick = () => {
    document.location = "#offer";
  };

  return (
    <header>
      <div className="header-img">
        <div className="header-img-shadow">
          <div className="box-container header-landing-page">
            <h1 className="header-h1">
              Nasza firma oferuje najwyższej jakości produkty.
            </h1>
            <p className="header-p">Nie wierz nam na słowo - sprawdź</p>
            <button onClick={handleClick}>Oferta</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
