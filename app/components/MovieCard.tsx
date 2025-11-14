"use client";

import Image from "next/image";
import Link from "next/link";
import { OMDBMovie } from "@/types/movie";

export default function MovieCard({ movie }: { movie: OMDBMovie }) {
  return (
    <Link
      href={`/movie/${movie.imdbID}`}
      className="movie-card"
    >
      <Image
        src={movie.Poster !== "N/A" ? movie.Poster : "/no-image.jpg"}
        alt={movie.Title}
        width={150}
        height={225}
      />
      <p>{movie.Title}</p>
    </Link>
  );
}
