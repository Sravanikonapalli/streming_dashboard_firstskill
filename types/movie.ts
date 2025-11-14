export interface OMDBMovie {
  imdbID: string;
  Title: string;
  Poster: string;
  Year: string;
  Type: string;
}

export interface OMDBMovieDetail extends OMDBMovie {
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Awards: string;
  imdbRating: string;
}
