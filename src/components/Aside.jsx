import { listOfEmplyess } from "../data/listOfEmployess";

const Aside = () => {
  return (
    <aside id="about-us">
      <div className="box-container div-flex">
        <h2 className="aside-h2">Nasi specjaliści</h2>
        {listOfEmplyess.map((item, key) => (
          <div className="employees" key={key}>
            <div className="employees-img">
              <img src={item.imgUrl} alt="employee" />
            </div>
            <div className="employees-info">
              <p>
                {item.firstName} {item.lastName} [{item.position}]
              </p>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Aside;
