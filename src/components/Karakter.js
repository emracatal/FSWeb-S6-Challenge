// Karakter bileşeniniz buraya gelecek
import React from "react";

const Karakter = ({ character }) => {
  return (
    <div>
      {character.name}
      <br />
      <ul>
        <li>gender: {character.gender}</li>
        <li>height: {character.height}</li>
        <li>mass: {character.mass}</li>
        <li>birthYear: {character.birth_year}</li>
        <li>eyeColor: {character.eye_color}</li>
        <li>hairColor: {character.hair_color}</li>
        <li>skinColor: {character.skin_color}</li>
        <li>Appears in: {character.films.length} movies</li>
      </ul>
      <br />
    </div>
  );
};

export default Karakter;

/* gender: male
Height: 172
Mass: 77
BirthYear: 19BBY
Eye Color: blue
Hair Color: blond
Skin Color: fair

<div>
      <li>gender: {character.gender}</li>
      <li>height: {character.height}</li>
      <li>mass: {character.mass}</li>
      <li>birthYear: {character.birthYear}</li>
      <li>eyeColor: {character.eyeColor}</li>
      <li>hairColor: {character.hairColor}</li>
      <li>skinColor: {character.skinColor}</li>
    </div>


    {character.map((m) => {
          return m.films;
        })}
 */
