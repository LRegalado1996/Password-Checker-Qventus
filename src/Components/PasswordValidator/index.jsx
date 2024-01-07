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
    valid: true,
    show: true,
  },
};

const specialCharactersRegex = /[!@#$%^&*]/;
const numberRegex = /[0-9]/;
const uppercaseLetterRegex = /[A-Z]/;
const consecutiveLettersRegex = /[a-zA-Z]{2}/;

const PasswordValidator = ({ value, options, customStyles={} }) => {
  const [validators, setValidators] = useState({});

  const checkPassword = () => {
    let newValidators = { ...validators };

    for (const item in validators) {
      const validator = validators[item];
      if (validator.show) {
        switch (validator.key) {
          case "specialCharacters":
            newValidators.specialCharacters = {
              ...newValidators.specialCharacters,
              valid: specialCharactersRegex.test(value),
            };
            break;

          case "number":
            newValidators.number = {
              ...newValidators.number,
              valid: numberRegex.test(value),
            };
            break;

          case "uppercaseLetter":
            newValidators.uppercaseLetter = {
              ...newValidators.uppercaseLetter,
              valid: uppercaseLetterRegex.test(value),
            };
            break;

          case "noConsecutiveLetters":
            newValidators.noConsecutiveLetters = {
              ...newValidators.noConsecutiveLetters,
              valid: !consecutiveLettersRegex.test(value),
            };
            break;

          default:
            break;
        }
      }
    }

    setValidators(newValidators);
  };

  useEffect(() => {
    let newDefaultValidators = { ...defaultValidators };
    for (const key in defaultValidators) {
      newDefaultValidators[key] = {
        ...defaultValidators[key],
        show: options[defaultValidators[key].key],
      };
    }

    setValidators(newDefaultValidators);
  }, [options]);

  useEffect(() => {
    if (Object.keys(validators).length > 0) checkPassword();
  }, [value]);
  

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
    <div className="PasswordValidator" style={customStyles}>
      <div className="containerValidators">{allValidators()}</div>
    </div>
  );
};

export default PasswordValidator;
