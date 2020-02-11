import React from 'react';
import Button from './Button';

export default {
  title: 'Button'
};

export const Basic = () => (
  <Button onClick={() => console.log('click')}>Click</Button>
);
