import { useEffect, useState } from "react";
import Hangman from "./components/Hangman";
import { getMovies, movies } from "./api/api";

const App = () => {
  const [play, setPlay] = useState(false);
  const [checkDb, setCheckDb] = useState(false);

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
    <div className="App">
      <h1>HANGMAN!</h1>

      {!play && (
        <button
          className="btn btn-danger m-1 px-4 py-1"
          onClick={() => {
            setPlay(true);
          }}
        >
          Play
        </button>
      )}
      {play && checkDb && <Hangman play={play} handlePlay={setPlay} />}
    </div>
  );
};

export default App;
