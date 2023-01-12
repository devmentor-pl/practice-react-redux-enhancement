import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUserName, getRespo } from "./github.actions";

const GitHub = () => {
  const [form, setForm] = useState({
    name: "",
    repo: "",
  });
  const repos = useSelector((state) => state.github.repos);
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(setUserName(form.name));
    dispatch(getRespo(form.name));
  };

  useEffect(() => {
    console.log(repos);
  });

  const inputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  console.log(form);

  return (
    <section>
      <form onSubmit={submitHandler}>
        <label>
          Imię użytkownika:
          <input name="name" value={form.name} onChange={inputChange} />
        </label>
        <label>
          Repozytorium:
          <input name="repo" value={form.repo} onChange={inputChange} />
        </label>
        <input type="submit" />
      </form>
      <ul>
        {repos
          .filter((n) => n.name.includes(form.repo))
          .map((n) => (
            <li>repoName: {n.name}</li>
          ))}
      </ul>
    </section>
  );
};

export default GitHub;
