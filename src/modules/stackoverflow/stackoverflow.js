import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData, setSort } from "./";

const Stackoverflow = () => {
    const [searchText, setSearchText] = useState('')
    // const [sort, setSelectedValue] = useState('none')
    const { dataArr, sort } = useSelector(state => state.stackoverflow)
    const dispatch = useDispatch()

    useEffect(() => {
        
            dispatch(getData(searchText, sort))
        
    }, [searchText, sort])

    // const submitHandler = (e) => {
    //     e.preventDefault()

    //     // if (searchText.trim() !== '') {
    //     dispatch(getData(searchText, sort))
    //     // }
    //     // else alert('No valid data!')
    // }

    const changeHandler = (e) => {
        setSearchText(e.target.value)
    }

    const selectHandler = (e) => {
        dispatch(setSort(e.target.value))
        // dispatch(getData(searchText, sort))

    }

    // const sortData = (value) => {
    //     if (value === 'none') {
    //         return dataArr
    //     } else {
    //         return dataArr.sort((a, b) => b[value] - a[value])
    //     }
    // }

    const renderList = () => {
        // const sortedArr = sortData(sort)

        return dataArr.map(item => (
            <li key={item.question_id}>
                <div>Title: <a href="">{item.title}</a></div>
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