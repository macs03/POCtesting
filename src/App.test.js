import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import App from './App';

describe('Testing App component', () => {
  it('should show some text', () => {
    render(<App />);
    expect(screen.getByTestId('app')).toHaveTextContent('Search your course');
  });
});
