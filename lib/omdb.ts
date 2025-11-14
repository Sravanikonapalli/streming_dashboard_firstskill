const API_KEY = process.env.OMDB_API_KEY;

export async function fetchMovieById(id: string) {
  const res = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`, {
    cache: "no-store",
  });

  const text = await res.text();

  try {
    return JSON.parse(text);
  } catch {
    console.error("OMDB invalid JSON:", text);
    return { Response: "False", Error: "Invalid API Response" };
  }
}

export async function fetchMoviesBySearch(query: string) {
  const res = await fetch(`https://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`, {
    cache: "no-store",
  });

  const text = await res.text();

  try {
    return JSON.parse(text);
  } catch {
    console.error("OMDB invalid JSON:", text);
    return { Search: [], Response: "False" };
  }
}
