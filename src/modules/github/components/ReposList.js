import React from "react";

import SearchBar from "./SearchBar";

function ReposList({ reposItems, searchBarOptions }) {
  return (
    <section>
      <SearchBar options={searchBarOptions} />
      <ul>{reposItems}</ul>
    </section>
  );
}

export default ReposList;
