import React, { useEffect } from "react";
import Search from "./components/Search";
import initialDetails from "./data/initialDetails";

function App() {
  const getData = async () => {
    const result = await fetch("https://jsonplaceholder.typicode.com/posts");
    const articles = await result.json();

    console.log(articles);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="tc bg-green ma0 pa4 min-vh-100">
      <Search details={initialDetails} />
    </div>
  );
}

export default App;
