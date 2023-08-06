import React from "react";
import Karakter from "./components/Karakter";
import { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  // Make a request for a user with a given ID
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    axios
      .get("https://swapi.dev/api/people/")
      .then(function (response) {
        // handle success
        console.log(response.data);
        setCharacters(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, []);

  return (
    <div className="App">
      <h1 className="Header">STAR WARS CHARACTERS</h1>
      <Karakter character />
      {characters.map((character) => {
        return <div>{character.name} </div>;
      })}
    </div>
  );
};

export default App;
