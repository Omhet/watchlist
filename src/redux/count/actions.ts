export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export const incrementCount = () => ({
  type: INCREMENT
});

export const decrementCount = () => ({
  type: DECREMENT
});
