import React from 'react';
import { render } from '@testing-library/react';
import Talent from './index';

test('Render Class element', () => {
  const element = render(<Talent />);
  React.isValidElement(element)
});