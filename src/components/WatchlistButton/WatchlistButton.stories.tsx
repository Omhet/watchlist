import React from 'react';
import WatchlistButton from './WatchlistButton';

export default {
  title: 'WatchlistButton'
};

export const Basic = () => <WatchlistButton />;

export const WithCounter = () => <WatchlistButton count={2} />;
