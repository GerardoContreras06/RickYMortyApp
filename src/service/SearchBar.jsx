import React from 'react'

const SearchBar = ({ setSearch, setSpecies }) => {
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSpeciesChange = (e) => {
    setSpecies(e.target.value);
  };

  return (
    <div className="mb-4">
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search by name..."
          onChange={handleSearchChange}
        />
      </div>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Filter by species..."
          onChange={handleSpeciesChange}
        />
      </div>
    </div>
  );
};

export default SearchBar;