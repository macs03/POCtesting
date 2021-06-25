import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Scroll from './Scroll';

describe('Testing Scroll component', () => {
  it('should render some html element', () => {
    const { container } = render(
      <Scroll>
        <h1>Hello, World!</h1>
      </Scroll>
    );

    expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        style="overflow-y: scroll; height: 70vh;"
      >
        <h1>
          Hello, World!
        </h1>
      </div>
    `);
  });
});
