import React from "react";

import FormField from "./FormField";

function SearchUserPanel({ fieldOptions, onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <FormField options={fieldOptions} />
      <FormField variant="submitButton" />
    </form>
  );
}

export default SearchUserPanel;
