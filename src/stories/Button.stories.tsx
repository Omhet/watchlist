import React from 'react';
import Button from '../components/Button/Button';

export default {
  title: 'Button'
};

export const Basic = () => (
  <Button onClick={() => console.log('click')}>Click</Button>
);
