import React, { FunctionComponent } from 'react';
import classnames from 'classnames';
import styles from './style.scss';

interface Props {
  videoKey: string;
  className?: string;
}

const YoutubeVideo: FunctionComponent<Props> = ({ videoKey, className }) => {
  return (
    <iframe
      className={classnames(styles.main, className)}
      src={`https://www.youtube.com/embed/${videoKey}`}
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
};

export default YoutubeVideo;
