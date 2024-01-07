import React, { useState } from "react";
import { Title, Input, PasswordValidator } from "../../Components";
import "./style.scss";

const passwordReqs = {
  specialCharacters: true,
  number: true,
  uppercaseLetter: true,
  noConsecutiveLetters: true,
};

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
          placeholder="Add your password"
          value={inputValue}
          onChange={handleInputChange}
        />

        <PasswordValidator value={inputValue} options={passwordReqs} />
      </div>
    </div>
  );
};

export default PasswordCheckerPage;
