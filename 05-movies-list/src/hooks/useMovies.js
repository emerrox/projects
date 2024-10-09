import { useCallback, useMemo, useRef, useState } from "react";
import { searchMovies } from "../services/movies";

export function useMovies({queri, sort}) {
  const [movies, setMovies] = useState()
  const [loading, setLoading] = useState(false)
  const previusSearch = useRef(queri)

  const getMovies = useCallback(async (queri)=>{
    if (queri == previusSearch.current) return
    try {
      setLoading(true)
      previusSearch.current = queri
      let newMovies = await searchMovies(queri)
      // newMovies = await getSortedMovies(newMovies)
      setMovies(newMovies)
      
    } catch (e) {
      console.log(e);
    }finally{
      setTimeout( ()=>{
       setLoading(false)
      },1000)
      
    }
  },[])

  const sortedMovies = useMemo(()=>{
    return sort ? [...movies].sort((a,b)=>a.title.localeCompare(b.title)) : movies
  },[sort,movies])

  return {movies: sortedMovies, getMovies, loading}
}