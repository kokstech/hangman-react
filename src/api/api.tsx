import axios from "axios";

export const movies: string[] = [];

export function getMovies() {
  axios.get("https://hangman-backend.onrender.com/api").then((res) => {
    res.data.map((movie: any) => movies.push(movie.name));
  });
}

export function testApi() {
  axios.get("https://kokstech-node-api.onrender.com/").then((res) => {
    console.log(res.data.message);
  });
}
