import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import fetchPetDetails from "./fetchPetDetails";

function Details() {
  var { id } = useParams();
  var results = useQuery(["details", id], fetchPetDetails);

  if (results.isError) {
    return <h2>Oop!</h2>;
  }

  if (results.isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">🌀</h2>
      </div>
    );
  }

  var pet = results.data.pets[0];

  return (
    <div className="details">
      <div>
        <h1>{pet.name}</h1>
        <h2>{`${pet.animal} — ${pet.breed} — ${pet.city}, ${pet.state}`}</h2>
        <button>Adopt {pet.name}</button>
        <p>{pet.description}</p>
      </div>
    </div>
  );
}

export default Details;
