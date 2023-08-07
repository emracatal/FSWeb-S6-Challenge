// Karakter bileşeniniz buraya gelecek
import React, { useState } from "react";
import Akordiyon from "./Akordiyon";

const Karakter = ({ character }) => {
  return (
    <div>
      <Akordiyon character={character} />
      <br />
      <br />
    </div>
  );
};

export default Karakter;
