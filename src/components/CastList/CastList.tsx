import React, { FunctionComponent } from 'react';
import { Cast } from '../../types/movie';
import HorizontalList from '../HorizontalList/HorizontalList';
import PersonCard from '../PersonCard/PersonCard';

interface Props {
  cast: Cast;
  className?: string;
}

const CastList: FunctionComponent<Props> = ({ cast, className }) => {
  return (
    <HorizontalList className={className}>
      {cast.map((person, i) => (
        <PersonCard key={i} {...person} title={person.character} />
      ))}
    </HorizontalList>
  );
};

export default CastList;
