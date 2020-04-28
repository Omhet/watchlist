import React from 'react';
import './style.scss';
import SearchBar from '../SearchBar/SearchBar';

const PageHeader = () => {
  return (
    <div>
      <SearchBar
        onSearch={value => {
          console.log(value);
        }}
      />
    </div>
  );
};

export default PageHeader;
