import { useState, useEffect } from 'react';
//API
import API from '../API';
//helpers
import { isPersistedState } from '../helpers';
//types
import {Movie, Cast, Crew} from '../types/Types';

export type MovieState = Movie & { cast: Cast[], directors: Crew[]}


export const useMovieFetch = (movieId: number) => {
    const [ movie, setMovie] = useState<MovieState>({} as MovieState);
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
                    cast: credits.cast,
                    directors: directors
                });

                setLoading(false);

            } catch(error) {
                setError(true);
            }
        }

        //check session storage before calling function to grab movie
        const sessionState = isPersistedState(movieId.toString());
        if(sessionState){
            console.log('grabbing from session storage');
            setMovie(sessionState);
            setLoading(false);
            return;
        }

        //call fetch here
        fetchMovie(); 

    }, [movieId]);

    //write to session storage after fetching movie
    useEffect(() => {
        sessionStorage.setItem(movieId.toString(), JSON.stringify(movie));
    }, [movieId, movie]);

    return {movie, loading, error};
}