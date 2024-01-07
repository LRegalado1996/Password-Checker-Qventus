import React, { useState } from "react";
import { Title, Input, PasswordValidator } from "../../Components";
import "./style.scss";

const PasswordCheckerPage = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="PasswordCheckerPage">
      <Title name={"Password Component"} />

      <div className="passwordCheckerContainer">
        <Input
          label=""
          placeholder="Ingrese su nombre"
          value={inputValue}
          onChange={handleInputChange}
        />

        <PasswordValidator />
      </div>
    </div>
  );
};

export default PasswordCheckerPage;
