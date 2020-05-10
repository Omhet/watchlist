import React, { FunctionComponent } from 'react';
import styles from './style.scss';
import { Cast } from '../../types/movie';
import HorizontalList from '../HorizontalList/HorizontalList';
import PersonCard from '../PersonCard/PersonCard';

interface Props {
  cast: Cast;
}

const CastList: FunctionComponent<Props> = ({ cast }) => {
  return (
    <>
      <h2 className={styles.title}>Cast</h2>
      <HorizontalList>
        {cast.map((person, i) => (
          <PersonCard key={i} {...person} title={person.character} />
        ))}
      </HorizontalList>
    </>
  );
};

export default CastList;
