import React, { useEffect, useState } from 'react';

import Search from './components/Search';
import initialDetails from './data/initialDetails';

const url = 'https://jsonplaceholder.typicode.com/posts';

function App() {
  const [articles, setArticles] = useState([]);

  const getData = async () => {
    const result = await fetch('https://jsonplaceholder.typicode.com/posts');
    const response = await result.json();

    setArticles(response);
  };

  useEffect(() => {
    getData(url);
  }, []);

  return (
    <div className="tc bg-green ma0 pa4 min-vh-100">
      <Search details={initialDetails} articles={articles} />
    </div>
  );
}

export default App;
