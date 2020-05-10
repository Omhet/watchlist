import React, { FunctionComponent } from 'react';
import styles from './style.scss';

interface Props {
  image: string;
  name: string;
  title: string;
}

const PersonCard: FunctionComponent<Props> = ({ image, name, title }) => {
  return (
    <div className={styles.main}>
      <img className={styles.image} src={image} alt={name} />
      <div className={styles.info}>
        <span title={name} className={styles.name}>
          {name}
        </span>
        <span title={title} className={styles.title}>
          {title}
        </span>
      </div>
    </div>
  );
};

export default PersonCard;
