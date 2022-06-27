import { useState, useEffect, useRef } from 'react';
import API from '../API';

//initial state of the movie list to be used to reset stuff
//the names of these properties match the property values that come back from the api in the movie list 
const initialState = {
    page: 0,
    results: [], //property that holds the movies starting with an empty array
    total_pages: 0,
    total_results: 0
}

export const useHomeFetch = () => {
 //scaffold out some of the state values here
 const [state, setState] = useState(initialState);
 const [loading, setLoading] = useState(false);
 const [error, setError] = useState(false); //use as a flag to detect error from api

 //create an initial state for resetting stuff

 const fetchMovies = async (page: number, searchTerm: string = "") => {
     try {
         setLoading(true);
         setError(false);

         const movies = await API.fetchMovies(searchTerm, page);
         //console.log(movies);
         
         setState(prev => ({
             ...movies,
             results: page > 1 ? [...prev.results, ...movies.results] : [...movies.results]
         }));

         // console.log(state);
         // console.log(state.results);
     } catch(error){
         setError(true);
     }
     setLoading(false);
 }

    //initial render
    //put the useeffect hook here to call the fetchMovies function when we startup the application and the Home component mounts
    useEffect(() => {
        fetchMovies(1)
    }, []);

    return { state, loading, error};
};


