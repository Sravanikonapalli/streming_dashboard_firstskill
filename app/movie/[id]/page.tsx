import { fetchMovieById } from "@/lib/omdb";
import Image from "next/image";
import styles from "./movie.module.css";
import { GiSandsOfTime } from "react-icons/gi";
import { CiCalendarDate } from "react-icons/ci";
import { FaStar,FaMasksTheater } from "react-icons/fa6";

export default async function MoviePage(props: { params: Promise<{ id: string }> }) {
  const { id } = await props.params;
  const movie = await fetchMovieById(id);

  if (!movie || movie.Response === "False") {
    return <h1 style={{ color: "white", padding: "40px" }}>Movie Not Found</h1>;
  }

  return (
    <div className={styles.page}>
      <div className={styles.banner}>
        <Image
          src={movie.Poster !== "N/A" ? movie.Poster : "/no-image.jpg"}
          alt={movie.Title}
          fill
          className={styles.bannerImage}
        />
        <div className={styles.bannerOverlay}>
          <h1>{movie.Title}</h1>
        </div>
      </div>

      {/* Info Row */}
      <div className={styles.infoRow}>
        <div className={styles.infoBox}><GiSandsOfTime color="red" size={20}/> {movie.Runtime}</div>
        <div className={styles.infoBox}><CiCalendarDate color="white"/> {movie.Released}</div>
        <div className={styles.infoBox}><FaStar color="yellow"/> {movie.imdbRating}</div>
        <div className={styles.infoBox}><FaMasksTheater color="grey"/> {movie.Genre}</div>
      </div>

      {/* Plot */}
      <div className={styles.plot}>
        <p>{movie.Plot}</p>
      </div>

      {/* Additional Details */}
      <div className={styles.detailsGrid}>
        <p><b className={styles.bold}>Director:</b> {movie.Director}</p>
        <p><b className={styles.bold}>Actors:</b> {movie.Actors}</p>
        <p><b className={styles.bold}>Language:</b> {movie.Language}</p>
        <p><b className={styles.bold}>Awards:</b> {movie.Awards}</p>
      </div>
    </div>
  );
}
