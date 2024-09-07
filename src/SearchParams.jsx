import React, { useEffect, useState } from "react";

import Pet from "./Pet";
var ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

function SearchParams() {
  var [location, setLocation] = useState("");
  var [animal, setAnimal] = useState("");
  var [breed, setBreed] = useState("");
  var breeds = [];
  var [pets, setPets] = useState([]);

  useEffect(() => {
    requestPets();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  async function requestPets() {
    var res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );
    var json = await res.json();
    setPets(json.pets);
  }

  function handleSubmit(e) {
    e.preventDefault();

    requestPets();
  }

  function handleInput(e) {
    setLocation(e.target.value);
  }

  function selectAnimal(e) {
    setAnimal(e.target.value);
    setBreed("");
  }

  function selectBreed(e) {
    setBreed(e.target.value);
  }

  return (
    <div className="search-params">
      <form onSubmit={handleSubmit}>
        <label htmlFor="location">
          Location
          <input
            type="text"
            id="location"
            value={location}
            placeholder="Location"
            onChange={handleInput}
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select id="animal" value={animal} onChange={selectAnimal}>
            <option value="">Select an animal</option>
            {ANIMALS.map((animal) => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          Animal
          <select
            disabled={breeds.length == 0}
            id="breed"
            value={breed}
            onChange={selectBreed}
          >
            <option value="">Select an breed</option>
            {breeds.map((breed) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>
        <button>Submit</button>
      </form>

      {pets.map((pet) => (
        <Pet
          name={pet.name}
          animal={pet.animal}
          breed={pet.breed}
          key={pet.id}
        />
      ))}
    </div>
  );
}

export default SearchParams;
