import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import SearchList from './SearchList';

const filteredPersons = [
  {
    address: 'address',
    email: 'jane@mail.com',
    id: 1,
    imgPath: '/assets/img/1.png',
    name: 'Jane Doe'
  }
];

describe('Testing SearchList component', () => {
  it('should show some text', () => {
    render(<SearchList filteredPersons={filteredPersons} />);

    expect(screen.getByTestId('card-name')).toHaveTextContent('Jane Doe');

    expect(screen.getByTestId('card-email')).toHaveTextContent('jane@mail.com');
  });
});
