import React from 'react';
import SearchBar from './SearchBar';

export default {
  title: 'SearchBar'
};

export const Basic = () => <SearchBar onSearch={value => console.log(value)} />;
