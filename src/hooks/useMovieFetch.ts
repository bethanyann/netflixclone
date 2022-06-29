import { useState, useEffect } from 'react';
//API
import API from '../API';
//types
import {Movie} from '../types/Types';

export const useMovieFetch = (movieId: number) => {
    const [ movie, setMovie] = useState<Movie>();
    const [ loading, setLoading ] = useState(true);
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

        fetchMovie(); //dont forget to actually call the function... 

    }, [movieId]);

    return {movie, loading, error};
}