import { useState, useEffect } from 'react';
import { setConstantValue } from 'typescript';
//API
import API from '../API';
//helpers
import { isPersistedState } from '../helpers';
//types
import {Movie} from '../types/Types';

export const useMovieFetch = (movieId: number) => {
    const [ movie, setMovie] = useState<Movie>();
    const [ loading, setLoading ] = useState(true); //this throws an error if this isn't set to true 
    const [ error, setError ] = useState(false);

    useEffect(() => {
        const fetchMovie = async() => {

            if(isNaN(movieId)){
                setError(true);
                return;
            }

            try {
                setLoading(true);
                setError(false);

                const movie = await API.fetchMovieData(movieId);
                const credits = await API.fetchMovieCredits(movieId);

                //filter out directors only from the crew list in the credits array
                const directors = credits.crew.filter((member: { job: string; }) => member.job === 'Director');
       
                setMovie({
                    ...movie,
                    actors: credits.cast,
                    directors: directors
                });

                setLoading(false);

            } catch(error) {
                setError(true);
            }
        }

        //check session storage before calling function to grab movie
        const sessionState = isPersistedState(movieId);
        if(sessionState){
            console.log('grabbing from session storage');
            setMovie(sessionState);
            setLoading(false);
            return;
        }

        fetchMovie(); //dont forget to actually call the function... 

    }, [movieId]);

    //write to session storage after fetching movie
    useEffect(() => {
        sessionStorage.setItem(movieId.toString(), JSON.stringify(movie));
    }, [movieId, movie]);

    return {movie, loading, error};
}