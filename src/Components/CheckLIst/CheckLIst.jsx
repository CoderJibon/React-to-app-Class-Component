import React, { useState } from "react";

const CheckLIst = () => {
  const [input, setInput] = useState([
    "Mern Stack",
    "wordpress",
    "laravel",
    "react developer",
    "Block chine",
    "AI",
    "mezento",
    "Shopify",
  ]);

  const [select, setSelect] = useState([]);

  const handelCheck = (e) => {
    const value = e.target.value;
    let update = [...select];
    if (select.includes(value)) {
      update.splice(select.indexOf(value), 1);
    } else {
      update.push(value);
    }
    setSelect(update);
  };

  return (
    <div>
      <section>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-5">
              <div className="card">
                <div className="card-body">
                  <form action="">
                    <label htmlFor="">Skill</label> <br />
                    <hr />
                    {input.map((item, index) => {
                      return (
                        <div key={index}>
                          <label htmlFor={item}>
                            <input
                              checked={select.includes(item)}
                              value={item}
                              id={item}
                              type="checkbox"
                              onChange={handelCheck}
                            />
                            {item}
                          </label>
                          <br />
                        </div>
                      );
                    })}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CheckLIst;
