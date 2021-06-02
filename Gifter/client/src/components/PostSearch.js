import React, { useContext } from "react";
import { PostContext } from "../providers/PostProvider";
import { Button } from "reactstrap";

const PostSearch = () => {
  const { searchTerm, setSearchTerm, searchPosts } = useContext(PostContext);

  return (
    <form>
      <input
        onChange={(e) => setSearchTerm(e.target.value)}
        value={searchTerm}
      ></input>
      <Button
        onClick={(e) => {
          e.preventDefault();
          searchPosts();
        }}
      >
        Search
      </Button>
    </form>
  );
};

export default PostSearch;
