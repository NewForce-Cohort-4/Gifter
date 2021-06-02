import React from "react";
import "./App.css";
import { PostProvider } from "./providers/PostProvider";
import PostList from "./components/PostList";
import PostSearch from "./components/PostSearch";

function App() {
  return (
    <div className="App">
      <PostProvider>
        <PostSearch />
        <PostList />
      </PostProvider>
    </div>
  );
}

export default App;
