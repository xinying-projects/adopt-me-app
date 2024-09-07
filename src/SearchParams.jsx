import React, { useState } from "react";

var ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

function SearchParams() {
  var [location, setLocation] = useState("");
  var [animal, setAnimal] = useState("");
  var [breed, setBreed] = useState("");
  var breeds = [];

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
      <form>
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
    </div>
  );
}

export default SearchParams;
