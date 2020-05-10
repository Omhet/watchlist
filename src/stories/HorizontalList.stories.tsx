import React from 'react';
import HorizontalList from '../components/HorizontalList/HorizontalList';
import PersonCard from '../components/PersonCard/PersonCard';

export default {
  title: 'HorizontalList'
};

const itemProps = {
  image:
    'https://image.tmdb.org/t/p/w276_and_h350_face/6NsMbJXRlDZuDzatN2akFdGuTvx.jpg',
  name: 'Scarlett Johansson',
  title: 'Rosie Betzler'
};

const otherItemProps = {
  image:
    'https://image.tmdb.org/t/p/w276_and_h350_face/6NsMbJXRlDZuDzatN2akFdGuTvx.jpg',
  name: 'Roman Griffin Davis Davis Davis',
  title: 'Johannes "Jojo" Betzler'
};

const anotherItemProps = {
  image:
    'https://image.tmdb.org/t/p/w276_and_h350_face/6NsMbJXRlDZuDzatN2akFdGuTvx.jpg',
  name: 'Roman Griffin',
  title: 'Johannes "Jojo" Betzler'
};

export const Basic = () => (
  <HorizontalList>
    <PersonCard {...itemProps} />
    <PersonCard {...otherItemProps} />
    <PersonCard {...anotherItemProps} />
  </HorizontalList>
);
