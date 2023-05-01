import React, {useEffect, useState} from "react"
import "./MovieDetail.css"
import { useParams } from "react-router-dom"

const MovieDetail = () => {
    const [Movie, setMovie] = useState()
    const { id } = useParams()

    useEffect(() => {
        getData()
        window.scrollTo(0,0)
    }, [])

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
        .then(res => res.json())
        .then(data => setMovie(data))
    }

    return (
        <div className="movie">
            <div className="movie__intro">
                <img className="movie__backdrop" src={`https://image.tmdb.org/t/p/original${Movie ? Movie.backdrop_path : ""}`} />
            </div>
            <div className="movie__detail">
                <div className="movie__detailLeft">
                    <div className="movie__posterBox">
                        <img className="movie__poster" src={`https://image.tmdb.org/t/p/original${Movie ? Movie.poster_path : ""}`} />
                    </div>
                </div>
                <div className="movie__detailRight">
                    <div className="movie__detailRightTop">
                        <div className="movie__name">{Movie ? Movie.original_title : ""}</div>
                        <div className="movie__tagline">{Movie ? Movie.tagline : ""}</div>
                        <div className="movie__rating">
                            {Movie ? Movie.vote_average: ""} <i class="fas fa-star" />
                            <span className="movie__voteCount">{Movie ? "(" + Movie.vote_count + ") votes" : ""}</span>
                        </div>  
                        <div className="movie__runtime">{Movie ? Movie.runtime + " mins" : ""}</div>
                        <div className="movie__releaseDate">{Movie ? "Release date: " + Movie.release_date : ""}</div>
                        <div className="movie__genres">
                            {
                                Movie && Movie.genres
                                ? 
                                Movie.genres.map(genre => (
                                    <><span className="movie__genre" id={genre.id}>{genre.name}</span></>
                                )) 
                                : 
                                ""
                            }
                        </div>
                    </div>
                    <div className="movie__detailRightBottom">
                        <div className="synopsisText">Synopsis</div>
                        <div>{Movie ? Movie.overview : ""}</div>
                    </div>
                    
                </div>
            </div>
            </div>
    )
}

export default MovieDetail