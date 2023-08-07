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

/* const [show, setShow] = useState(false);
const handleOpen = () => {
    setShow(!show); // Toggle accordion
  };

  onClick={handleOpen} */
