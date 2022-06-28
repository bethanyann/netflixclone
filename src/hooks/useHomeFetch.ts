import { findAllByTestId } from '@testing-library/react';
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

 const [isLoadingMore, setIsLoadingMore] = useState(false);
 const [ searchTerm, setSearchTerm ] = useState();

 //to test if the setSearchTerm effect is working in the search bar
 //console.log(searchTerm);

 const fetchMovies = async (page: number, searchTerm: string = "") => {
     try {
         setLoading(true);
         setError(false);
        console.log(searchTerm);
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
    //going to use this same hook for searching for movies too 
    useEffect(() => {
        //wipe out the state to remove anything before fetching again
        setState(initialState);
        fetchMovies(1, searchTerm); //almost forgot to pass in the search term here and couldn't figure out why the search wasn't working. 
    }, [searchTerm]); //this will trigger once on first render, and then it will also trigger when the search term changes


    //Load More - we only want this to run if it is loading more, and not just on any render
    useEffect(() => {
        if(!isLoadingMore) return;
        //increment page by one
        fetchMovies(state.page + 1, searchTerm);
        //set the load to false once the fetch has completed
        setIsLoadingMore(false);

    }, [isLoadingMore, searchTerm, state.page]);

    return { state, loading, error, setSearchTerm, searchTerm, setIsLoadingMore };
};


