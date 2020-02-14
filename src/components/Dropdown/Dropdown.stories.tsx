import React from 'react';
import Dropdown from './Dropdown';
import Button from '../Button/Button';

export default {
  title: 'Dropdown'
};

export const Basic = () => (
  <Dropdown header="Click to open">
    <Button>Option 1</Button>
    <Button>Option 2</Button>
  </Dropdown>
);
