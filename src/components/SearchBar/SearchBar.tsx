import React from 'react';
import './style.scss';
import SearchIcon from '../../icons/Search.svg';

const SearchBar = () => {
  return (
    <form>
      <input
        type="text"
        placeholder="Search for movies"
        className="searchbar"
      />
      <SearchIcon width={24} />
    </form>
  );
};

export default SearchBar;
