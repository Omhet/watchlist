import React from 'react';
import WatchlistCounter from '../components/WatchlistCounter/WatchlistCounter';

export default {
  title: 'WatchlistCounter'
};

export const Basic = () => <WatchlistCounter />;

export const WithCounter = () => <WatchlistCounter count={2} />;
