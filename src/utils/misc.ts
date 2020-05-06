export const minutesToRuntimeString = (minutes: number) => {
  const getTimeStr = (n: number, appx: string) =>
    n !== 0 ? `${n}${appx}` : '';

  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  const hStr = getTimeStr(h, 'h');
  const mStr = getTimeStr(m, 'm');

  return `${hStr} ${mStr}`;
};
