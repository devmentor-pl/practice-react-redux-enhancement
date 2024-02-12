import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { loadReposAction, loadReposWithSignAction } from "./github.actions";

const styles = { display: "block" };

const Form = ({ repos, loadRepos, loadReposBySign }) => {
  const [user, setUser] = useState("");
  const [sign, setSign] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    loadRepos(user);
  };
  const handleSignChange = (e) => {
    const {value} = e.target;
    setSign(value)
    if(user) {
      if(value !== '') {
        loadReposBySign(user, sign)
    }
    }
  
  }
  useEffect(() => {
    console.log(repos);
  }, [repos]);

  return (
    <form onSubmit={handleSubmit}>
      <label style={styles} htmlFor="name">
        User
        <input
          style={styles}
          name="name"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
      </label>
      <label style={styles} htmlFor="symbol">
        Symbol
        <input
          style={styles}
          name="symbol"
          value={sign}
          onChange={handleSignChange}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

const mapStateToProps = (state) => ({
  repos: state.repos,
});

const mapDispatchToProps = {
  loadRepos: loadReposAction,
  loadReposBySign: loadReposWithSignAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
