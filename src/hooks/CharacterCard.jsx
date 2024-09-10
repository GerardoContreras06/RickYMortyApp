import React from 'react'

const CharacterCard = ({ character }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100">
        <img src={character.image} className="card-img-top" alt={character.name} />
        <div className="card-body">
          <h5 className="card-title">{character.name}</h5>
          <p className="card-text">Species: {character.species}</p>
          <p className="card-text">Status: {character.status}</p>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;