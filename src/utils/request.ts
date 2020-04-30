export const fetchFeaturedMovies = async () => {
  const res = await fetch(
    'https://api.themoviedb.org/3/discover/movie?api_key=16a9a816f5f270bded4ebfa953a7ee0f&language=en-EN&sort_by=popularity.desc&include_adult=false&include_video=false&page=1'
  );
  const data = await res.json();
  return data.results;
};
