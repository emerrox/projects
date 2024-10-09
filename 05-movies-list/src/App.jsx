import { useState } from 'react'
import './App.css'
import { Movies } from './components/Movies.jsx'
import { useMovies } from './hooks/useMovies.js'
import { useSearch } from './hooks/useSearch.js'
import debounce from "just-debounce-it";
import { filterInput } from './functions.js'

function App() {
  const [sort, setSort] = useState(false)
  const {queri, setQueri,err} = useSearch()
  const {movies, getMovies, loading} = useMovies({queri, sort})

  const debouncedGetmovies = debounce((queri)=>{getMovies(queri)},300)

  const handleSubmit = (event)=>{
    event.preventDefault()
    if (err==null) getMovies(queri)
  }
  
  const handleChange = (event)=>{
    let newQueri = event.target.value
    setQueri(newQueri)
    if (filterInput(newQueri)==null) debouncedGetmovies(newQueri)
  }

  return (
    <>
    <header>
     <h2>Search movies</h2>
     <form action="" onSubmit={handleSubmit}>
        <label htmlFor="name">Name </label>
        <input onChange={handleChange} type="text" id='name' />
        <input type="checkbox" name="" id="" onChange={()=>{setSort(!sort)}} checked={sort} />
        <button type="submit">Search</button>
     </form>
     {err!=null && <p style={{color: 'red'}} >{err}</p>}
    </header>
    <main>
      {loading ? 'Loading . . .' : <Movies movies={movies}/>}
    </main>
    </>
  )
}

export default App
