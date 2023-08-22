import { useEffect, useState, useRef, RefObject } from "react";
import CustomForm from "./components/Form";
import Hangman from "./components/Hangman";
import { getMovies } from "./api/api";

const App = () => {
  const [play, setPlay] = useState(false);
  const [hasAccount, setHasAccount] = useState(true);

  const buttonRef: RefObject<HTMLButtonElement> = useRef(null);

  useEffect(() => {
    getMovies();
  }, [play]);

  return (
    <>
      <div className="app">
        <h1 className="m-3">HANGMAN!</h1>
        <div>
          {!play && hasAccount && (
            <CustomForm
              params="login"
              btnName="login to play"
              playHangman={() => {
                setPlay(true);
              }}
            />
          )}
        </div>
        <div>
          {!play && !hasAccount && (
            <CustomForm
              params="signup"
              btnName="create account"
              playHangman={() => {
                setHasAccount(true);
              }}
            />
          )}
        </div>
        {!play && (
          <div>
            <button
              type="button"
              ref={buttonRef}
              onClick={() => {
                if (hasAccount) setHasAccount(false);
                else setHasAccount(true);
                if (buttonRef.current) {
                  buttonRef.current.blur();
                }
              }}
              className="btn btn-danger"
            >
              {hasAccount ? "...or create account" : "...back to login"}
            </button>
          </div>
        )}
        {play && (
          <Hangman
            play={play}
            handlePlay={() => {
              setPlay(false);
            }}
          />
        )}
      </div>
    </>
  );
};

export default App;
