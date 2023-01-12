import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setTopic, getData, sortData } from "./stackoverflow.actions";
import Moment from "react-moment";

const StackOverflow = () => {
  const [form, setForm] = useState({
    topic: "",
  });

  Moment.globalFormat = "DD MM YYYY";
  const downloadedData = useSelector(
    (state) => state.stackoverflow.downloadedData
  );
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(setTopic(form.topic));
    dispatch(getData(form.topic));
  };

  useEffect(() => {
    console.log(downloadedData);
  });

  const onClickSortByDatekHandler = (e) => {
    setForm("");
    dispatch(sortData("creation_date"));
  };

  const onClickSortByReputationHandler = (e) => {
    setForm("r");
    dispatch(sortData("reputation"));
  };

  useEffect(() => {
    console.log(downloadedData);
  });

  const inputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  console.log(form);

  return (
    <section>
      <form onSubmit={submitHandler}>
        <label>
          Wyszukiwany temat:
          <input name="topic" value={form.topic} onChange={inputChange} />
        </label>
        <input type="submit" />
      </form>
      <button onClick={onClickSortByDatekHandler}>sort by date</button>
      <button onClick={onClickSortByReputationHandler}>
        sort by author reputation
      </button>
      <ul>
        {downloadedData.map((n) => (
          <li>
            date: <Moment unix>{n.creation_date}</Moment> author:{" "}
            {n.owner.display_name}
            authorReputation: {n.owner.reputation} title: {n.title}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default StackOverflow;

/*       <ul>
        {repos
          .filter((n) => n.name.includes(form.repo))
          .map((n) => (
            <li>{n}</li>
          ))}
      </ul> 
      <ul>
        {downloadedData.map((n) => (
          <li>{n.creation_date}</li>
        ))}
      </ul> */
/*    > */
