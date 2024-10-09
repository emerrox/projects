function ListOfMovies({movies}){

    return (
        movies.map((film)=>(
            <div className="film" key={film.id}>
                <img src={film.image} alt={film.title} />
                <p>{film.title}</p>
            </div>))        
    )
}

function NoMoviesResult() {
    return (<p>So quiet here...</p>)
}

export function Movies({movies}){
   const hasMovies = movies?.length > 0 

   return (
    hasMovies
    ? <ListOfMovies movies={movies} />
    : <NoMoviesResult />
   )
}