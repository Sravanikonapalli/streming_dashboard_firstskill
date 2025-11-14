import HeroBanner from "./components/HeroBanner";
import MovieRow from "./components/MovieRow";
import { fetchMoviesBySearch } from "@/lib/omdb";

export default async function Home() {
  const popular = await fetchMoviesBySearch("Avengers"); // returns Search[]
  const trending = await fetchMoviesBySearch("Batman");
  const topRated = await fetchMoviesBySearch("Star Wars");

  return (
    <main>
      <HeroBanner movie={popular.Search[0]} />

      <MovieRow title="Popular" movies={popular.Search} />
      <MovieRow title="Trending" movies={trending.Search} />
      <MovieRow title="Top Rated" movies={topRated.Search} />
    </main>
  );
}
