import { useState, useEffect } from "react";

var localCache = {};

function useBreedList(animal) {
  var [breedList, setBreedList] = useState([]);
  var [status, setStatus] = useState("unloaded");

  useEffect(() => {
    if (!animal) {
      setBreedList([]);
    } else if (localCache[animal]) {
      setBreedList(localCache[animal]);
    } else {
      requestBreedList();
    }

    async function requestBreedList() {
      setBreedList([]);
      setStatus("loading");

      var res = await fetch(
        `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
      );
      var json = await res.json();
      localCache[animal] = json.breeds || [];
      setBreedList(localCache[animal]);
      setStatus("loaded");
    }
  }, [animal]);

  return [breedList, status];
}

export default useBreedList;
