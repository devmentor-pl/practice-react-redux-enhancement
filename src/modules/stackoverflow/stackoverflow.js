import React, { useEffect } from 'react'
import { getPostsAction, setPhraseAction, setSortAction } from './stackoverflow.actions'
import { useDispatch, useSelector } from 'react-redux'


const Stackoverflow = () => {
  const { phrase, sort, posts } = useSelector(state => state.stackoverflow)
  const dispatch = useDispatch()

  useEffect(() => {
    if(phrase) {
      dispatch(getPostsAction(phrase, sort))
    }
  }, [phrase, sort])


  return (
    <section>
      <form action="">
        <input type="text" name='phrase' value={phrase}
          onChange={e => dispatch(setPhraseAction(e.target.value))}
        // onBlur={e => dispatch(getPostsAction(phrase, sort))}
        />
        <select name="sort" id="" value={sort}
          onChange={e => dispatch(setSortAction(e.target.value))}
        >
          <option value="activity">activity</option>
          <option value="creation">creation</option>
          <option value="votes">votes</option>
          <option value="relevance">relevance</option>
        </select>
      </form>
      <ul>
        <h4>wyniki</h4>
        {posts.map(post => <li key={post.question_id}><a href={post.link}>{post.title}</a></li>)}
      </ul>
    </section>
  )
}

export default Stackoverflow

