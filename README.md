# Streaming Dashboard Clone

A Netflix-style streaming dashboard built with **Next.js 14**, **TypeScript**, and **Local CSS**. The project fetches movie data from the **OMDB API** and provides a responsive layout with a hero banner and dynamic movie detail pages.

---

## Features

- **Hero Banner**: Shows featured movie at the top with overlay text
- **Horizontal Movie Rows**: Popular, Trending, Top Rated categories
- **Dynamic Movie Pages**: Clicking a movie card or PLAY button navigates to detailed page
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Optimized Images**: Uses Next.js `<Image/>` component with `fill` for hero and posters
- **Error Handling**: Handles invalid API responses gracefully

---

## Tech Stack

- **Next.js 14 (App Router)**
- **TypeScript**
- **Local CSS**
- **OMDB API** (Movie Data)
- **Vercel** (Deployment)

---

## Installation

1. Clone the repository
```bash
git clone https://github.com/Sravanikonapalli/streming_dashboard_firstskill.git
cd streaming-dashboard-clone
```
2. Install dependencies

```
npm install
``` 

3. Create .env.local with your OMDB API key

```
OMDB_API_KEY=your_api_key_here
```

```.env
OMDB_API_KEY=490adc62
OMDB_URL=https://www.omdbapi.com/
```

4. Run the development server

```
npm run dev
```

Open http://localhost:3000 in your browser.

---------

### Deployment

**Deployed to Vercel:**

1. Push code to GitHub

2. Connect repository in Vercel

3. Add OMDB_API_KEY as a Vercel Environment Variable

4. Deploy
-------
### Usage
- Browse movie categories (Popular, Trending, Top Rated)
- Click PLAY or a movie card to view movie details
- Responsive layout adjusts automatically for mobile and tablet