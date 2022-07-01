import React from 'react';
import { useParams, Link } from 'react-router-dom'; //this is how you get the movieId prop from the router 
//config
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config';
//types
//components
import Grid from './Grid/grid';
import Spinner from './Spinner/spinner';
import BreadCrumb from './BreadCrumb/breadcrumb';
import MovieInfo from './MovieInfo/movieInfo';
import Actor from './ActorThumbnail/actor';
//hooks
import { useMovieFetch } from '../hooks/useMovieFetch';
//image
import NoImage from '../images/no_image.jpg';


const Movie = () => {
    const  { movieId }  = useParams(); //this name has to match the name given in the app.tsx file in the route path
    const movieID = Number(movieId); //probably a better way to do this 

    const {movie, loading, error} = useMovieFetch(movieID);

    //use to see structure of movie array options
    //console.log(movie); 

    if(loading) return <div> <Spinner /> </div>;
    if(error) return <div> Something went wrong...</div>; //TODO - make an error handler and page to display
    
    return (
        <>
            {/* {movie ? <BreadCrumb movieTitle={movie.original_title} /> : <Link to='/'>Back to Homepage</Link> } */}
            {movie ?
             <>
                <MovieInfo movie={movie} />
             </>
             : null
            }
            <Grid header='Actors'>
                {movie ? movie.actors.map(actor => (
                   <Actor key={actor.credit_id} actorId={actor.id} name={actor.name} character={actor.character ? actor.character: ""}
                    imageURL= {
                        actor.profile_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}` : NoImage
                    }
                   />  
                )) : null}
            </Grid>
        </>
    );
}
export default Movie; 