import MovieCard from "./MovieCard";
import { OMDBMovie } from "@/types/movie";

export default function MovieRow({
  title,
  movies,
}: {
  title: string;
  movies: OMDBMovie[];
}) {
  const uniqueMovies = movies.filter(
    (movie, index, self) =>
      index === self.findIndex((m) => m.imdbID === movie.imdbID)
  );

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row-movies">
        {uniqueMovies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  );
}
