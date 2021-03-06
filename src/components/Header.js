import React from "react";
import "../index.css";

const Header = () => {
  return (
    <div className="header">
      <h1>
        <a href="#" className="title">
          Hacker News
        </a>
      </h1>
      <div className="nav">
        <div className="menu">
          <a href="#" className="item">
            new
          </a>
          <p>|</p>
          <a href="#" className="item">
            past
          </a>
          <p>|</p>
          <a href="#" className="item">
            comments
          </a>
          <p>|</p>
          <a href="#" className="item">
            ask
          </a>
          <p>|</p>
          <a href="#" className="item">
            show
          </a>
          <p>|</p>
          <a href="#" className="item">
            jobs
          </a>
          <p>|</p>
          <a href="#" className="item">
            submit
          </a>
          <p>|</p>
        </div>
      </div>
      <div className="login">
        <a href="#" className="item">
          login
        </a>
      </div>
    </div>
  );
};

export default Header;
