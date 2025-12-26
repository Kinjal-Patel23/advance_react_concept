import { useEffect, useState, useCallback } from "react";
import Header from "./Header";
import PostList from "./PostList";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    console.log("App re-rendered");
  });

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data.slice(0, 20)));
  }, []);

  const handleSearch = useCallback((value) => {
    setSearch(value);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <Header search={search} onSearch={handleSearch} />
      <PostList posts={posts} search={search} />
    </div>
  );
};

export default App;
