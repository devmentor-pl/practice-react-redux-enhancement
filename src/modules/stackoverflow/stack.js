import React, { useState } from "react";
import { connect } from "react-redux";
import { loadPostsAction } from "./stack.actions";

const StackOverflow = ({ posts, loadPosts }) => {
  const [sortedPosts, setSortedPosts] = useState([]);
  const handleClick = () => {
    loadPosts();
  };
  const handleSortByReputation = () => {
    if (typeof posts === "object" && posts !== null) {
      const postsArray = Object.values(posts);
      const sortedArray = [...postsArray].sort(
        (a, b) => b.reputation - a.reputation
      );
      setSortedPosts(sortedArray);
      console.log(sortedPosts);
    }
  };
  return (
    <>
      <button onClick={handleClick}>getPosts</button>
      <button onClick={handleSortByReputation}>Sort by Reputation</button>
    </>
  );
};

const mapStateToProps = (state) => ({
  posts: state.posts,
});

const mapDispatchToProps = {
  loadPosts: loadPostsAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(StackOverflow);
