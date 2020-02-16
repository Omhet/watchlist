import React from 'react';
import Dropdown from '../components/Dropdown/Dropdown';
import Button from '../components/Button/Button';

export default {
  title: 'Dropdown'
};

export const Basic = () => (
  <Dropdown header="Click to open">
    <Button>Option 1</Button>
    <Button>Option 2</Button>
  </Dropdown>
);

export const OpenByDefault = () => (
  <Dropdown isOpenByDefault header="Click to open">
    <Button>Option 1</Button>
    <Button>Option 2</Button>
  </Dropdown>
);
