import React from 'react';
import { useParams, Link } from 'react-router-dom'; //this is how you get the movieId prop from the router 
//config
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config';
//types
import { Movie as MovieType } from '../types/Types';
//components
import Grid from './Grid/grid';
import Spinner from './Spinner/spinner';
import BreadCrumb from './BreadCrumb/breadcrumb';
//hooks
import { useMovieFetch } from '../hooks/useMovieFetch';
//image
import NoImage from '../images/no_image.jpg';

const Movie = () => {
    const  { movieId }  = useParams(); //this name has to match the name given in the app.tsx file in the route path
    const movieID = Number(movieId); //probably a better way to do this 

    const {state: movie, loading, error} = useMovieFetch(movieID);

    //use to see structure of movie array options
    //console.log(movie); 

    if(loading) return <div> <Spinner /> </div>;
    if(error) return <div> Something went wrong..</div>; //TODO - make an error handler and page to display
    
    return (
        <>
            {movie ? <BreadCrumb movieTitle={movie.original_title} /> : <Link to='/'>Back to Homepage</Link> }
        </>
    );
}
export default Movie; 