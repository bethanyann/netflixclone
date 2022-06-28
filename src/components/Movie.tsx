import React from 'react';
import { useParams } from 'react-router-dom'; //this is how you get the movieId prop from the router 
//config
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config';
//components
import Grid from './Grid/grid';
import Spinner from './Spinner/spinner';
//hooks
import { useMovieFetch } from '../hooks/useMovieFetch';
//image
import NoImage from '../images/no_image.jpg';

const Movie = () => {
    const  { movieId }  = useParams(); //this name has to match the name given in the app.tsx file in the route path
    const movieID = Number(movieId); //probably a better way to do this 

    const {state: movie, loading, error} = useMovieFetch(movieID);

    console.log(movie); 
    return (
        <>
            <div>Movie</div>
        </>
    );
}
export default Movie; 