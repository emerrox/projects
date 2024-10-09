import { API_URL } from "../constants";

export function searchMovies(search){
    if (search == null) return
    return fetch(API_URL + search)
    .then(res => res.json())
    .then(data => {
        const movies = data.Search
        return movies?.map(movie => ({
            id: movie.imdbID,
            title: movie.Title,
            year: movie.Year,
            image: movie.Poster
        }))
      })
}