import React from "react";
import "./Home.css";
import headerImg from "../Assets/doctor.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-6">
            <h5>We provide all health care solution</h5>
            <h2>Protect your health and take care to of your health</h2>
            <button>
              <a href="#">Read more</a>
            </button>
            <span>+</span>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="header-box">
              <img src={headerImg} />
              <FontAwesomeIcon icon={faSquare} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Home;
