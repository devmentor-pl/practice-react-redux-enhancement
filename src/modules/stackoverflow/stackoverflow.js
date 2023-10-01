import React from "react";
import { stackoverflowGetData } from "./stackoverflow.api";
import { useDispatch, useSelector } from "react-redux";
import { filterByDateAction, filterByReputationAction } from "./stackoverflow.actions";

const StackOverflow = () => {
  const [stackoverflowTitle, setStackoverflowTitle] = React.useState('')
  const resp = useSelector(state => state.resp)
  const filterByDate = useSelector(state => state.filterByDate)
  const filterByUserReputation = useSelector(state => state.filterByUserReputation)
  const dispatch = useDispatch()

  const handleSearch = React.useCallback(() => {
    dispatch(stackoverflowGetData(stackoverflowTitle))
  }, [dispatch, stackoverflowGetData, stackoverflowTitle])

  const sortByReputation = (resp) => {
    const sortedResp = resp.sort((a, b) => {
      return b.owner.reputation - a.owner.reputation
    })

    return printListItem(sortedResp)
  }

  const sortByDate = (resp) => {
    const sortedResp = resp.sort((a, b) => {
      const creationDateA = new Date(a.creation_date * 1000)
      const creationDateB = new Date(b.creation_date * 1000)
      return creationDateB - creationDateA
    })

    return printListItem(sortedResp)
  }

  const printListItem = (resp) => {
    return resp.map(post => {
      const creationDate = new Date(post.creation_date * 1000)
      return (
        <div key={post.question_id}>
          <p>Date: {creationDate.getDate()}.{creationDate.getMonth() + 1}.{creationDate.getFullYear()} Reputation: {post.owner.reputation}</p>
          <li>{post.title}</li>
        </div>
      )
    }
    )
  }

  return (
    <div>
      <label htmlFor="stackoverflowTitle">Stack Overflow Title:</label>
      <input
        type="text"
        id="stackoverflowTitle"
        name="stackoverflowTitle"
        value={stackoverflowTitle}
        onChange={(e) => setStackoverflowTitle(e.target.value)}
      />
      <button
        onClick={handleSearch}
      >
        SEARCH
      </button>
      <button
        onClick={() => dispatch(filterByDateAction())}
      >
        DATA FILTER
      </button>
      <button
        onClick={() => dispatch(filterByReputationAction())}
      >
        REPUTATION FILTER
      </button>
      <ul>
        {
          filterByDate ?
            sortByDate(resp)
            :
            filterByUserReputation ?
              sortByReputation(resp)
              :
              null
        }
      </ul>
    </div>
  )
}

export default StackOverflow