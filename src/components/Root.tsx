import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from '../redux';
import { saveWatchlist, loadWatchlist } from '../utils/storage';
import App from './App/App';

const watchlist = loadWatchlist();

const store = configureStore({ movies: { watchlist, toShow: [], title: '' } });
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
