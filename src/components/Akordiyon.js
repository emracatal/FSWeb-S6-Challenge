import React from "react";
import { useState } from "react";

const Akordiyon = ({ character }) => {
  const [show, setShow] = useState(false);
  const handleOpen = () => {
    setShow(!show); // Toggle accordion
  };
  return (
    <div
      class="accordion text-black"
      onClick={handleOpen}
      id="accordionExample"
    >
      <div class="accordion-item bg-transparent text-black">
        <h2 class="accordion-header bg-transparent text-black" id="headingOne">
          <button
            class="accordion-button bg-transparent text-black "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            {character.name}
          </button>
        </h2>
        <div
          id="collapseOne"
          class="accordion-collapse collapse show"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          {show ? (
            ""
          ) : (
            <div class="accordion-body ">
              <ul>
                <li>Gender: {character.gender}</li>
                <li>Height: {character.height}</li>
                <li>Mass: {character.mass}</li>
                <li>Birth Year: {character.birth_year}</li>
                <li>Eye Color: {character.eye_color}</li>
                <li>Hair Color: {character.hair_color}</li>
                <li>Skin Color: {character.skin_color}</li>
                <li>Appears in: {character.films.length} movies</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Akordiyon;
