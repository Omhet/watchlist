import React from 'react';
import PersonCard from '../components/PersonCard/PersonCard';

export default {
  title: 'PersonCard'
};

const props = {
  image:
    'https://image.tmdb.org/t/p/w276_and_h350_face/6NsMbJXRlDZuDzatN2akFdGuTvx.jpg',
  name: 'Scarlett Johansson',
  title: 'Rosie Betzler'
};

export const Basic = () => <PersonCard {...props} />;
