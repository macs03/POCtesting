import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Search from './Search';
import initialDetails from '../data/initialDetails';

const url = 'https://potato.com/';

const mockResponse = [
  {
    id: 123,
    body: 'first body',
    title: 'first title',
    userId: 1
  }
];

beforeEach(() => {
  jest.spyOn(global, 'fetch').mockResolvedValue({
    json: jest.fn().mockResolvedValue(mockResponse)
  });
});

afterEach(() => {
  jest.restoreAllMocks();
});

describe('Testing Search component', () => {
  it('should show some text on heading', async () => {
    render(<Search details={initialDetails} url={url} />);

    await waitFor(() => screen.getByTestId('search-title'));

    expect(screen.getByTestId('search-title')).toHaveTextContent(
      'Search your course'
    );
  });

  it('should show article title', async () => {
    render(<Search details={initialDetails} url={url} />);

    await waitFor(() => screen.getByTestId('article-123'));

    expect(screen.getByTestId('article-123')).toHaveTextContent('first title');
  });

  fit('should show searched article if something is typed on input', async () => {
    render(<Search details={initialDetails} url={url} />);

    fireEvent.change(screen.getByTestId('search-input'), {
      target: { value: 'Jane' }
    });

    await waitFor(() => screen.getByTestId('card-name'));
    await waitFor(() => screen.getByTestId('card-email'));

    expect(screen.getByTestId('card-name')).toHaveTextContent('Jane Doe');

    expect(screen.getByTestId('card-email')).toHaveTextContent(
      'janedoe@gmail.com'
    );
  });
});
