import React from "react";
import { offer } from "../data/offer";

const BoxOffer = () => {
  return (
    <div className="offer-info">
      {offer.map((item, key) => (
        <div key={key} className={item.isNew ? "new" : ""}>
          <p className="offer-p">
            {item.name}{" "}
            {item.isNew ? <span className="offer-news">(nowość)</span> : ""}
          </p>
        </div>
      ))}
    </div>
  );
};

export default BoxOffer;
