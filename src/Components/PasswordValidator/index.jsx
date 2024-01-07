import React, { useState, useEffect } from "react";
import "./style.scss";

const defaultValidators = {
  specialCharacters: {
    key: "specialCharacters",
    text: "Has a special char !@#$%^&*",
    valid: false,
    show: true,
  },
  number: {
    key: "number",
    text: "Has a number 0-9",
    valid: false,
    show: true,
  },
  uppercaseLetter: {
    key: "uppercaseLetter",
    text: "Has a uppercase Letter",
    valid: false,
    show: true,
  },
  noConsecutiveLetters: {
    key: "noConsecutiveLetters",
    text: "Consecutive letters",
    valid: false,
    show: true,
  },
};

//const specialCharacters = "!@#$%^&*";

const PasswordValidator = ({ value, options }) => {
  const { specialCharacters, number, uppercaseLetter, noConsecutiveLetters } =
    options;

  const [validators, setValidators] = useState({});

  useEffect(() => {
    let newDefaultValidators = defaultValidators;
    for (const key in defaultValidators) {
      newDefaultValidators[key] = {
        ...defaultValidators[key],
        show: options[defaultValidators[key].key],
      };
    }

    setValidators(newDefaultValidators);
  }, [options]);

  useEffect(() => {
    if (specialCharacters) checkSpecialCharacters();
    if (number) checkNumber();
    if (uppercaseLetter) checkUppercaseLetter();
    if (noConsecutiveLetters) checkNoConsecutiveLetters();

    //console.log(validators);
  }, [value, specialCharacters, number, uppercaseLetter, noConsecutiveLetters]);

  const checkSpecialCharacters = () => {};
  const checkNumber = () => {};
  const checkUppercaseLetter = () => {};
  const checkNoConsecutiveLetters = () => {};

  const allValidators = () => {
    const result = [];

    for (const key in validators) {
      const validator = validators[key];
      if (!validator.show) continue;
      result.push(
        <p key={validator.key}>
          <i className={"icon " + (validator.valid ? "tick" : "cross")}></i>
          {validator.text}
        </p>
      );
    }

    return result;
  };

  return (
    <div className="PasswordValidator">
      <div className="containerValidators">{allValidators()}</div>
    </div>
  );
};

export default PasswordValidator;
