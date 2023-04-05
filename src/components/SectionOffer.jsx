const SectionOffer = ({ children }) => {
  return (
    <section id="offer">
      <div className="box-container">
        <h2 className="offer-h2">Czym zajmuje się nasza firma?</h2>
        {children}
      </div>
    </section>
  );
};

export default SectionOffer;
