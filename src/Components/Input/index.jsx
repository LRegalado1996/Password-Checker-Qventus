import React from "react";
import "./style.scss";

const Input = ({ label, placeholder, value, onChange }) => {
  return (
    <div className="Input">
      {label && <label className="inputLabel">{label}</label>}
      <input
        type="text"
        className="inputField"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
