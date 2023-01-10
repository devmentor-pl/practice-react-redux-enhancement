import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setTopic, getData } from "./stackoverflow.actions";

const StackOverflow = () => {
  const [form, setForm] = useState({
    topic: "",
  });
  const downloadedData = useSelector((state) => state.downloadedData);
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(setTopic(form.topic));
    dispatch(getData(form.topic));
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
          <input name="name" value={form.topic} onChange={inputChange} />
        </label>
        <input type="submit" />
      </form>
    </section>
  );
};

export default StackOverflow;

/*       <ul>
        {repos
          .filter((n) => n.name.includes(form.repo))
          .map((n) => (
            <li>{n.name}</li>
          ))}
      </ul> */
