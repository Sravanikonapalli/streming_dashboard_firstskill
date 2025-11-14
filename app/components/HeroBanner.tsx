"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { OMDBMovie } from "@/types/movie";
import styles from "./HeroBanner.module.css";

export default function HeroBanner({ movie }: { movie: OMDBMovie }) {
  const router = useRouter();

  return (
    <section className={styles.banner}>
      <Image
        src={movie.Poster !== "N/A" ? movie.Poster : "/no-image.jpg"}
        alt={movie.Title}
        fill
        className={styles.bannerImage}
      />

      <div className={styles.overlay}>
        <h1>{movie.Title}</h1>
        <p>{movie.Year}</p>

        <button
          className={styles.playBtn}
          onClick={() => router.push(`/movie/${movie.imdbID}`)}
        >
          PLAY
        </button>
      </div>
    </section>
  );
}
