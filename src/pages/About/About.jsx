import React from "react";
import { Link, Outlet } from "react-router-dom";

const About = () => {
  return (
    <div>
      About
      <hr />
      <div className="row">
        <div className="col-md-4">
          <ul className="list-group">
            <li className="list-group-item">
              <Link to="jibon">home1</Link>
            </li>
            <li className="list-group-item">
              <Link to="sojib">home2</Link>
            </li>
            <li className="list-group-item">
              <Link to="redio">home3</Link>
            </li>
            <li className="list-group-item">
              <Link to="rakib">home4</Link>
            </li>
            <li className="list-group-item">
              <Link to="miloon">miloon</Link>
            </li>
          </ul>
        </div>
        <div className="col-md-8">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default About;
