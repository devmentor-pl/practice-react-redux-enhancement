import React from "react";

import FormField from "./FormField";

function SearchBar({
  options: {
    label = null,
    name,
    id,
    placeholder,
    type = "search",
    value,
    onChange,
  },
}) {
  const inputOptions = {
    label,
    name,
    id,
    placeholder,
    type,
    value,
    onChange,
  };

  return (
    <form>
      <FormField options={inputOptions} />
    </form>
  );
}

export default SearchBar;
