import React from 'react';
import { addDecorator } from '@storybook/react';
import '../src/index.scss';

const storyStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: 911
};

addDecorator(storyFn => <div style={storyStyle}>{storyFn()}</div>);
