import React from "react";
import "./style.css";

export const Index = () => {
  return (
    <div className="index">
      <div className="div">
        <div className="flexcontainer">
          <p className="text">
            <span className="text-wrapper">
              About
              <br />
            </span>
          </p>
          <p className="text">
            <span className="text-wrapper">
              Projects
              <br />
            </span>
          </p>
          <p className="text">
            <span className="text-wrapper">Social</span>
          </p>
        </div>
        <div className="rectangle" />
        <div className="flexcontainer-2">
          <p className="span-wrapper">
            <span className="span">
              S P<br />
            </span>
          </p>
          <p className="span-wrapper">
            <span className="span">Vedanta</span>
          </p>
        </div>
        <div className="rectangle-2" />
        <div className="rectangle-3" />
      </div>
    </div>
  );
};
