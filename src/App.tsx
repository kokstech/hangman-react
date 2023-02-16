import { useEffect, useState } from "react";
import CustomForm from "./components/Form";
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
      <div>
        {!play && (
          <CustomForm
            playHangman={() => {
              setPlay(true);
            }}
          />
        )}
      </div>
      {play && checkDb && <Hangman play={play} handlePlay={setPlay} />}
    </div>
  );
};

export default App;
