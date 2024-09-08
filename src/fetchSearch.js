async function fetchSearch({ queryKey }) {
  var { animal, location, breed } = queryKey[1];
  console.log(breed);

  var res = await fetch(
    `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
  );

  if (!res.ok) {
    throw new Error("fetch pets failed.");
  }

  return res.json();
}

export default fetchSearch;
