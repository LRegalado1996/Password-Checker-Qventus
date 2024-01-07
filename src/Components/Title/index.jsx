import React from "react";
import "./style.scss";

const Title = ({ name }) => {
  return (
    <div className="Title">
      <h1>{name}</h1>
    </div>
  );
};

export default Title;
