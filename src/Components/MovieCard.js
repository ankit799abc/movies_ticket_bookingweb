import React from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import notFound from "../notFound.avif"
//props -> movie


const MovieCard = (props) => {
    const { movie } = props
    const showMovies= movie.show.image

    const navigate = useNavigate()

    function handleClick() {
        // redirect to the MoviesBookingPage component
        //  and pass the movie
        let movieId = movie.show.id
        navigate(`/bookmovie/${movieId}`, { state: { movie } })
        console.log(`allnd dk ${movie.show.image}`);
    }

   if(showMovies){
    return (
           <div >
            <div className="back" >
                <img alt="Girl in a jacket" src={movie.show.image==null?notFound:movie.show.image.original} width="200" height="250" />
                <div className="con">
                    <span>Movie Name :-  {movie.show.name}</span>
                    <br />
                    <span>
                        Language: {movie.show.language}
                        <br />
                        Status: {movie.show.status}
                    </span>
                    <br />
                    <Button className="btn" type="button"
                        onClick={handleClick}
                    >Booking</Button>
                </div>
            </div>
        </div>
        
    )}else{
        return (
        <>
        </>
        )
    }
}

export default MovieCard;