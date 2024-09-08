import Pet from "./Pet";

function Results({ pets }) {
  return (
    <div className="search">
      {pets.length == 0 ? (
        <h1>No Pets Found.</h1>
      ) : (
        pets.map((pet) => (
          <Pet
            name={pet.name}
            animal={pet.animal}
            breed={pet.breed}
            key={pet.id}
            id={pet.id}
            images={pet.images}
            location={`${pet.city}, ${pet.state}`}
          />
        ))
      )}
    </div>
  );
}

export default Results;
