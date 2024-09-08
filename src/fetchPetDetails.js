async function fetchPetDetails({ queryKey }) {
  var id = queryKey[1];

  var apiRes = await fetch(`http://pets-v2.dev-apis.com/pets?id=${id}`);

  // need to throw an error
  if (!apiRes.ok) {
    throw new Error(`fetch pet details failed at id:${id}`);
  }

  // need to return a promise
  return apiRes.json();
}

export default fetchPetDetails;
