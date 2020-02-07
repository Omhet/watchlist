import React, { PureComponent } from 'react';
import './style.scss';
import SearchBar from '../SearchBar/SearchBar';

class App extends PureComponent {
  render() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}

export default App;
