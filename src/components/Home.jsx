import React, { useState, useEffect } from 'react';
//config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config';
//components
import HeroImage from './HeroImage/heroimage';
import Grid from './Grid/grid';
//hooks
import { useHomeFetch } from '../hooks/useHomeFetch';
//image
import NoImage from '../images/no_image.jpg';

//always capitalize component names
//curly brackets because we need an explicit return statement here 
const Home = () => {
    const { state, loading, error } = useHomeFetch();
    console.log(state);
    

    return (
    <>
        { state.results[0] ?
               
            <HeroImage 
                image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}  //example of path https://image.tmdb.org/t/p/w1280/wcKFYIiVDvRURrzglV9kGu7fpfY.jpg
                title={state.results[0].original_title}
                text={state.results[0].overview}
            />  
             : null
        }

        <Grid header='Popular Movies'>
            {state.results.map(movie => (
                <div key={movie.id}>{movie.title}</div>
            ))}
        </Grid>
    
    </>
    );
}

export default Home;