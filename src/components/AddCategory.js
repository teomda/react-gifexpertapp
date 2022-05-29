import React, { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ setCategorias }) => {
  const [inputValue, setinputValue] = useState("");
  const handleInputChange = (e) => {
    // console.log(e.target.value);
    setinputValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log("Submit echo.");
    if (inputValue.trim().length > 2) {
      setCategorias((categorias) => [inputValue, ...categorias]);
      setinputValue("");
    }
  };
  return (
    <form
      action=""
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      {/* <h2>AddCategory</h2> */}
      <h1>{inputValue}</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => {
          handleInputChange(e);
        }}
      />
    </form>
  );
};
AddCategory.propTypes = {
  setCategorias: PropTypes.func.isRequired,
};

export default AddCategory;
