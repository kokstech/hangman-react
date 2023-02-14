import axios from "axios";
import env from "react-dotenv";
export const movies: string[] = [];

export async function getMovies() {
  await axios.get(env.BACKEND_URL).then((res) => {
    console.log(process.env.BACKEND_URL);
    res.data.map((movie: any) => movies.push(movie.title));
  });
}

getMovies();
