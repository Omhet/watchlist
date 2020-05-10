import React, { FunctionComponent } from 'react';
import styles from './style.scss';
import PlayIcon from '../../icons/Play.svg';
import { MovieWithInfo, Movie } from '../../types/movie';
import MoviePreview from '../MoviePreview/MoviePreview';

interface Props extends MovieWithInfo {
  onToggleWatchlistClick(movie: Movie): void;
}

const MovieInfo: FunctionComponent<Props> = ({
  backdropPoster,
  poster,
  genres,
  tagline,
  runtime,
  plot,
  year,
  title,
  rate,
  creators,
  isInWatchlist,
  id,
  onToggleWatchlistClick
}) => {
  const movie = { poster, title, rate, isInWatchlist, id };
  return (
    <div className={styles.main}>
      <div className={styles.overview}>
        <div className={styles.preview}>
          <MoviePreview
            onWatchlistClick={onToggleWatchlistClick}
            movie={movie}
            showInfo={false}
            size="m"
          />
        </div>

        <div className={styles.infoBlock}>
          <div className={styles.upperInfo}>
            <div className={styles.info}>
              <h1 title={title} className={styles.title}>
                {title}
              </h1>
              <div className={styles.additionalInfo}>
                <span>{year}</span>
                <span>{genres.join(', ')}</span>
                <span>{runtime}</span>
              </div>
              <a className={styles.trailerLink}>
                <PlayIcon width={16} height={16} className={styles.playIcon} />
                <span>Watch Trailer</span>
              </a>
            </div>
            <div className={styles.rate}>{rate}</div>
          </div>

          <div>
            <div className={styles.tagline}>{tagline}</div>
            <p className={styles.plot}>{plot}</p>
            <div className={styles.creators}>
              {creators.map(({ name, job }) => (
                <div key={name}>
                  <span>{name}</span>
                  <span>{job}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.backdrop}>
        <img className={styles.backdropPoster} src={backdropPoster} />
        <div className={styles.overlay}></div>
      </div>
    </div>
  );
};

export default MovieInfo;
