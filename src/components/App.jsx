import React, { useState, useEffect } from 'react'
import CharacterList from '../hooks/CharacterList'
import SearchBar from '../service/SearchBar'

function App() {
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState('');
  const [species, setSpecies] = useState('');

  useEffect(() => {
    fetchCharacters();
  }, [search, species]);

  const fetchCharacters = async () => {
    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character?name=${search}&species=${species}`
      );
      const data = await response.json();
      setCharacters(data.results || []);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="container">
      <h1 className="text-center my-4">Rick and Morty Album</h1>
      <SearchBar setSearch={setSearch} setSpecies={setSpecies} />
      <CharacterList characters={characters} />
    </div>
  );
}

export default App;