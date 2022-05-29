import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
// import PropTypes from "prop-types";
import { GifGrid } from "./components/GifGrid";

const GitExpertApp = () => {
  const [categorias, setCategorias] = useState(["One Punch"]);

  return (
    <>
      <h2>GitExpertApp</h2>
      <AddCategory setCategorias={setCategorias}></AddCategory>
      <hr />

      <ol>
        {categorias.map((categoria) => (
          <GifGrid key={categoria} categoria={categoria} />
          //<li key={i}>{categoria}</li>
        ))}
      </ol>
    </>
  );
};

export default GitExpertApp;
