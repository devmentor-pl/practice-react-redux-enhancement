import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData, setSort } from "./";

const Stackoverflow = () => {
    const [searchText, setSearchText] = useState('')
    const { dataArr, sort } = useSelector(state => state.stackoverflow)
    const dispatch = useDispatch()

    useEffect(() => {     
        dispatch(getData(searchText, sort))     
    }, [searchText, sort])

    const changeHandler = (e) => {
        setSearchText(e.target.value)
    }

    const selectHandler = (e) => {
        dispatch(setSort(e.target.value))
    }

    const renderList = () => {

        return dataArr.map(item => (
            <li key={item.question_id}>
                <div>Title: <a href={item.link}>{item.title}</a></div>
                <div>Score: {item.score}</div>
            </li>
        )
        )
    }

    return (
        <>
            <h4>Search in Stackoverflow</h4>
            <form >
                <label>
                    <input type="text" placeholder='Search' value={searchText} onChange={changeHandler} />
                </label>
                <input type="submit" value="submit" />
            </form>
            {dataArr.length !== 0 && (
                <div>
                    <label>Sort by
                        <select name='sort' value={sort} onChange={selectHandler} >
                            <option value='votes'>score</option>
                            <option value='creation'>creation date</option>
                        </select>
                    </label>
                    {renderList()}
                </div>
            )}
        </>
    )
}

export default Stackoverflow