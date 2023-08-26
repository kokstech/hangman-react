import { useState } from "react";
import Modals from "./Modals";
import MyButton from "./MyButton";

export default function Login(props: {
  params: string;
  playHangman: () => void;
  btnName: string;
}) {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const [modalMsg, setModalMsg] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    setModalMsg("");
  };
  const handleShow = () => setShow(true);

  function updateForm(value: any) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  async function onSubmit(e: any) {
    e.preventDefault();
    handleShow();
    const player = { ...form };

    try {
      const response = await fetch(
        `https://hangman-backend.onrender.com/${props.params}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(player),
        }
      );
      const data = await response.json();

      if (response.status === 200 && props.params === "login") {
        props.playHangman();
      } else if (response.status === 200 && props.params === "signup") {
        setModalMsg(data.successMsg);

        props.playHangman();
      } else if (response.status === 400) {
        setModalMsg(data.errorMsg);
      } else if (response.status === 422) {
        setModalMsg(data.errors.msg);
      }
    } catch (error) {
      console.error(error);
    }

    setForm({ username: "", password: "" });
  }

  return (
    <div className="container">
      {modalMsg !== "" && (
        <Modals
          handleClose={handleClose}
          handleShow={handleShow}
          show={show}
          modalMsg={modalMsg}
        />
      )}

      <div className="row align-items-center">
        <form onSubmit={onSubmit}>
          <div className="form-group col-lg-4 col-md-6 mx-auto mb-3">
            <label htmlFor="username">Username</label>
            <input
              autoComplete="on"
              type="text"
              className="form-control"
              id="username" // Updated id to "username"
              value={form.username}
              onChange={(e) => updateForm({ username: e.currentTarget.value })}
            />
          </div>
          <div className="form-group col-lg-4 col-md-6 mx-auto mb-3">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password" // Updated id to "password"
              value={form.password}
              onChange={(e) => updateForm({ password: e.currentTarget.value })}
            />
          </div>
          <div className="form-group col-lg-4 col-md-6 mx-auto mb-2">
            <MyButton
              classes="btn btn-primary"
              typ="submit"
              label={props.btnName}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
