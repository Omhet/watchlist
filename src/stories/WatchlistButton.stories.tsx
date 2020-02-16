import React from 'react';
import WatchlistButton from '../components/WatchlistButton/WatchlistButton';

export default {
  title: 'WatchlistButton'
};

export const Basic = () => <WatchlistButton />;

export const WithCounter = () => <WatchlistButton count={2} />;
