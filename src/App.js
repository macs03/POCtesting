import React from 'react';

import Search from './components/Search';
import initialDetails from './data/initialDetails';

const url = 'https://jsonplaceholder.typicode.com/posts';

const App = () => (
  <div className="tc bg-green ma0 pa4 min-vh-100" data-testid="app">
    <Search details={initialDetails} url={url} />
  </div>
);

export default App;
