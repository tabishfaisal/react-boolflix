import { useContext } from "react"
import GlobalContext from "./context/GlobalContext"

export default function Card() {
    const { movies } = useContext(GlobalContext);
    const ImageSize = 'w185';
    const baseImageUrl = 'https://image.tmdb.org/t/p/';
    return (
        <div className="container">
            <div className="row">
                {movies.length > 0 ? (
                    movies.map((movie, index) => (
                        <div key={index} className="col">
                            <ul className="card">
                                <li>
                                    <img className="img" src={`${baseImageUrl}${ImageSize}${movie.poster_path}`} />
                                </li>
                                <li>Movie Name: {movie.title}</li>
                                <li>Movie Original-Name: {movie.original_title}</li>
                                <li>Movie Original_language: {movie.original_language}</li>
                                <li>Vote: {movie.vote_average * 2}</li>
                            </ul>
                        </div>
                    ))
                ) : (
                    <div className="home-container">
                        <p className="home-page" >BoolFlix</p>
                    </div>
                    
                )}
            </div>
        </div>
    )
}