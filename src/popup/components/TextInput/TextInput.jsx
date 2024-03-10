import React, { useContext } from "react";
import AppContext from "../../context/AppContext";

const TextInput = () => {
  const { inputValue, setInputValue } = useContext(AppContext);

  return (
    <input
      type="text"
      value={inputValue}
      placeholder="Enter text here"
      onChange={(e) => {
        setInputValue(e.target.value);
      }}
    ></input>
  );
};

export default TextInput;
