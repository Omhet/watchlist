import { Creators, Videos } from '../types/movie';

export const minutesToRuntimeString = (minutes: number) => {
  const getTimeStr = (n: number, appx: string) =>
    n !== 0 ? `${n}${appx}` : '';

  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  const hStr = getTimeStr(h, 'h');
  const mStr = getTimeStr(m, 'm');

  return `${hStr} ${mStr}`;
};

export const findMainCreators = (creators: Creators) => {
  const res: Creators = [];

  const findByJob = (job: string) => creators.find(c => c.job === job);
  const addPersonToRes = (job: string) => {
    const person = findByJob(job);
    if (person !== undefined) res.push(person);
  };

  addPersonToRes('Director');
  addPersonToRes('Screenplay');
  addPersonToRes('Producer');

  return res.length === 0 ? creators.slice(0, 3) : res;
};

export const findTrailer = (videos: Videos) => {
  return videos.results.find(({ type }) => type === 'Trailer')?.key;
};
