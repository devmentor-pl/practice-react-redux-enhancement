import React from "react";

import ResultsList from "../components/ResultsList";
import { useSelector } from "react-redux";

function ResultsListContainer() {
  const results = useSelector((state) => state.similar);

  const sortedResultsByOwnerRep = results.toSorted(
    (firstItem, secondItem) =>
      secondItem.owner.reputation - firstItem.owner.reputation
  );

  const getResultItems = sortedResultsByOwnerRep.map(
    ({ link, question_id, title }) => (
      <li key={question_id}>
        {title} <a href={link}>URL</a>
      </li>
    )
  );

  return <ResultsList resultItems={getResultItems} />;
}

export default ResultsListContainer;
