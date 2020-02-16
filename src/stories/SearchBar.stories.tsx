import React from 'react';
import SearchBar from '../components/SearchBar/SearchBar';

export default {
  title: 'SearchBar'
};

export const Basic = () => <SearchBar onSearch={value => console.log(value)} />;
