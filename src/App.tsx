import { useEffect, useState } from "react";
import CustomForm from "./components/Form";
import Hangman from "./components/Hangman";
import { getMovies, movies } from "./api/api";

const App = () => {
  const [play, setPlay] = useState(false);
  const [checkDb, setCheckDb] = useState(false);
  const [hasAccount, setHasAccount] = useState(true);

  useEffect(() => {
    getMovies();
    if (movies.length >= 1) {
      setCheckDb(true);
    } else {
      getMovies();
      setCheckDb(true);
    }
  }, []);

  useEffect(() => {
    getMovies();
  }, [play]);

  return (
    <>
      <div className="App">
        <h1>HANGMAN!</h1>
        <div>
          {!play && hasAccount && (
            <CustomForm
              login="login"
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
              login={"signup"}
              btnName="create account"
              playHangman={() => {
                setHasAccount(true);
                alert("success");
              }}
            />
          )}
        </div>
        {!play && (
          <div>
            <button
              type="button"
              onClick={() => {
                if (hasAccount) setHasAccount(false);
                else setHasAccount(true);
              }}
              className="btn btn-danger"
            >
              {hasAccount ? "...or create account" : "...back to login"}
            </button>
          </div>
        )}
        {play && checkDb && <Hangman play={play} handlePlay={setPlay} />}
      </div>
    </>
  );
};

export default App;
