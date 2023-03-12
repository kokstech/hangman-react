import React, { useState } from "react";

export default function Login(props: any) {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  function updateForm(value: any) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  async function onSubmit(e: any) {
    e.preventDefault();

    const player = { ...form };

    try {
      const response = await fetch(
        `https://hangman-backend.onrender.com/${props.login}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(player),
        }
      );
      const data = await response.json();

      if (response.status === 200) {
        props.playHangman();
      } else if (props.login === "signup") {
        if (response.status === 400) alert("username is already taken");
        else if (response.status === 422) {
          alert(data.errors.msg);
        }
      } else {
        alert("incorrect password or username");
      }
    } catch (error) {
      console.error(error);
    }
    setForm({ username: "", password: "" });
  }

  return (
    <div className="container">
      <div className="row align-items-center">
        <form onSubmit={onSubmit}>
          <div className="form-group col-lg-4 col-md-6 mx-auto mb-3">
            <label htmlFor="name">Username</label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={form.username}
              onChange={(e) => updateForm({ username: e.currentTarget.value })}
            />
          </div>
          <div className="form-group col-lg-4 col-md-6 mx-auto mb-3">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="position"
              value={form.password}
              onChange={(e) => updateForm({ password: e.currentTarget.value })}
            />
          </div>
          <div className="form-group col-lg-4 col-md-6 mx-auto mb-2">
            <input
              type="submit"
              value={props.btnName}
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
