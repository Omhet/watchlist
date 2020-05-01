import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from '../redux';
import App from '../containers/App';
import { saveWatchlist } from '../utils/storage';

const store = configureStore();
window.store = store;

export default class Root extends Component {
  componentDidMount() {
    window.addEventListener('beforeunload', () => {
      const { watchlist } = store.getState().movies;
      saveWatchlist(watchlist);
    });
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    );
  }
}
