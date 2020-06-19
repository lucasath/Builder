import React from 'react';
import { render } from '@testing-library/react';
import Tier from './index';

test('Render Class element', () => {
  const element = render(<Tier />);
  React.isValidElement(element)
});