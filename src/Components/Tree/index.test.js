import React from 'react';
import { render } from '@testing-library/react';
import Tree from './index';

test('Render Class element', () => {
  const element = render(<Tree />);
  React.isValidElement(element)
});