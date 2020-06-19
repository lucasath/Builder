import React from 'react';
import { render } from '@testing-library/react';
import Clas from './index';

test('Render Class element', () => {
  const element = render(<Clas />);
  React.isValidElement(element)
});