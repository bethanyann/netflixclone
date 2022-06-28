import React, { useState, useEffect } from 'react';
//config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config';
//components
import HeroImage from './HeroImage/heroimage';
import Grid from './Grid/grid';
import Thumb from './Thumbnail/thumbnail';
import Spinner from './Spinner/spinner';
import SearchBar from './SearchBar/searchbar';
import Button from './Button/button';
//hooks
import { useHomeFetch } from '../hooks/useHomeFetch';
//image
import NoImage from '../images/no_image.jpg';

//always capitalize component names
//curly brackets because we need an explicit return statement here 
const Home = () => {
    const { state, loading, error, setSearchTerm, searchTerm, setIsLoadingMore } = useHomeFetch();  //bringing the set search term here, which means when this gets updated in the search bar, the useHomeFetch() hook will be triggered again
    //console.log(state);
    if(error) return <div> something went wrong... </div>

    return (
    <>
        { state.results[0] && !searchTerm ?
               
            <HeroImage 
                image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}  //example of path https://image.tmdb.org/t/p/w1280/wcKFYIiVDvRURrzglV9kGu7fpfY.jpg
                title={state.results[0].original_title}
                text={state.results[0].overview}
            />  
             : null
        }
        <SearchBar setSearchTerm={setSearchTerm} />
        <Grid header={ searchTerm ? 'Search Results' : 'Popular Movies'}>
            {state.results.map(movie => (
                <Thumb key={movie.id} clickable={true} movieId={movie.id} image={movie.poster_path ? IMAGE_BASE_URL+POSTER_SIZE+movie.poster_path : NoImage }/>
            ))}
        </Grid>
        
        {loading ? <Spinner/> : null }

        {state.page < state.total_pages && !loading ? (         //only show the load more button if its not the last page and if its not loading more movies
            <Button text='Load More' callback={() => setIsLoadingMore(true)}/>
        ) : null }
    </>
    );
}

export default Home;