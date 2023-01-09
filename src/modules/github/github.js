import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUserName, getRespo } from "./github.actions";

const GitHub = () => {
  const [form, setForm] = useState({
    name: "",
    repo: "",
  });
  const repos = useSelector((state) => state.repos);
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("kot");
    dispatch(setUserName(form.name));
    console.log(form.name);
    dispatch(getRespo(form.name));

    console.log(repos);
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
    </section>
  );
};

export default GitHub;
