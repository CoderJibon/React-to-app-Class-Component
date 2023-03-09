import React from "react";
import { Link } from "react-router-dom";

const Shop = () => {
  return (
    <div>
      <div className="card" style={{ width: "25%" }}>
        <div className="card-body">
          <h2>oopo mobile phone</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur maxime veritatis non iste quidem deleniti a beatae.
            Quasi, hic qui.
          </p>
          <Link className="btn btn-primary" to="/shop/oopo-mobile-phone">
            add product
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Shop;
