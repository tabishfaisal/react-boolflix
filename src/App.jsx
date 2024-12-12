import { useState, useEffect} from "react";
import axios from "axios";
function App() {
  //const [searchMovies,SetSearchMovie] = useState("");
  const [movies,SetMovies] =useState([]);

  useEffect(()=>{
    axios.get('https://api.themoviedb.org/3/search/tv?api_key=7bafc08fe8f7b050c388482fd1944745&language=it_IT&query=scrubs')
    .then((res)=>SetMovies(res.data.results))
    .catch((error)=>console.error(error))
  },[]);

  return (
    <>
    <header className="header">
        <h1>BoolFlix</h1>
        <form className="form" action="">
          <input type="search"/>
          <input type="submit" value="invio" />
        </form>
    </header>
    <div className="container">
        <div className="row">
        {movies.length > 0 ? (
              movies.map((movie, index) => (
                <div key={index} className="col">
                    <ul className="card">
                      <li>Movie Name: {movie.name}</li>
                      <li>Movie Original-Name: {movie.original_name}</li>
                      <li>Movie Original_language: {movie.original_language}</li>
                      <li>Vote: {movie.vote_average*2}</li>
                    </ul>
                </div>
              ))
            ) : (
              <p>Loading...</p>
            )}
      </div>
    </div>
    </>
  )
}

export default App