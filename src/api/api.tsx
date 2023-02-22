import axios from "axios";
import env from "react-dotenv";
export const movies: string[] = [];

export async function getMovies() {
  await axios.get(process.env.BACKEND_URL).then((res) => {
    res.data.map((movie: any) => movies.push(movie.title));
  });
}

getMovies();
