import React, { useState } from "react";

import useBreedList from "./useBreedList";
import Results from "./Results";
import { useQuery } from "@tanstack/react-query";
import fetchSearch from "./fetchSearch";

var ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

function SearchParams() {
  var [animal, setAnimal] = useState("");
  var [fetchParams, setFetchParams] = useState({
    animal,
    breed: "",
    location: "",
  });
  var [breeds] = useBreedList(animal);
  console.log(breeds);

  var results = useQuery(["search", fetchParams], fetchSearch);

  var pets = results?.data?.pets ?? [];

  function handleSubmit(e) {
    e.preventDefault();

    var formData = new FormData(e.target);
    var params = {
      animal: animal ?? "",
      breed: formData.get("breed") ?? "",
      location: formData.get("location") ?? "",
    };

    setFetchParams(params);
  }

  function selectAnimal(e) {
    setAnimal(e.target.value);
  }

  return (
    <div className="search-params">
      <form onSubmit={handleSubmit}>
        <label htmlFor="location">
          Location
          <input
            type="text"
            id="location"
            name="location"
            placeholder="Location"
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
          <select disabled={breeds.length == 0} id="breed" name="breed">
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
      <Results pets={pets} />
    </div>
  );
}

export default SearchParams;
