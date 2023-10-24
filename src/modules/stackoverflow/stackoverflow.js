import React, { useState } from "react";
import { StackoverflowAPI } from './'
import { useDispatch, useSelector } from "react-redux";
import { loadData } from "./";

const Stackoverflow = () => {
    const [searchText, setSearchText] = useState('')
    const [selectedValue, setSelectedValue] = useState('none')
    const dataArr = useSelector(state => state.stackoverflow.dataArr)
    const dispatch = useDispatch()

    const stackoverflowApi = new StackoverflowAPI()


    const submitHandler = (e) => {
        e.preventDefault()

        if (searchText.trim() !== '') {
            stackoverflowApi.load(searchText)
                .then(({ items }) => {
                    if (items.length !== 0) {
                        dispatch(loadData(items))
                    } else alert('The phrase was not found')
                })
        }
        else alert('No valid data!')
    }

    const changeHandler = (e) => {
        dispatch(loadData([]))
        setSearchText(e.target.value)
    }

    const selectHandler = (e) => {
        setSelectedValue(e.target.value)
    }

    const sortData = (value) => {
        if (value === 'none') {
            return dataArr
        } else {
            return dataArr.sort((a, b) => b[value] - a[value])
        }
    }

    // const renderDate = (date) => {
    //     const newDateObj = new Date(date)
    //     const day = newDateObj.getDay()
    //     const month = newDateObj.getMonth()
    //     const year = newDateObj.getFullYear()

    //     return `${year}-${month}-${day}`
    // }

    const renderList = () => {

        const sortedArr = sortData(selectedValue)

        return sortedArr.map(item => (

            <li key={item.question_id}>
                <div>Title: {item.title}</div>
                <div>Score: {item.score}</div>
                {/* <div>Creation date: {renderDate(item.creation_date)}</div> */}
            </li>)
        )
    }

    return (
        <>
            <h4>Search in Stackoverflow</h4>
            <form onSubmit={submitHandler}>
                <label>
                    <input type="text" placeholder='Search' value={searchText} onChange={changeHandler} />
                </label>
                <input type="submit" value="submit" />

            </form>
            {dataArr.length !== 0 && (
                <div>
                    <label>Sort by
                        <select onChange={selectHandler} >
                            <option value='none'>-</option>
                            <option value='score'>score</option>
                            <option value='creation_date'>creation date</option>
                        </select>
                    </label>
                    {renderList()}
                </div>
            )}
        </>
    )
}

export default Stackoverflow