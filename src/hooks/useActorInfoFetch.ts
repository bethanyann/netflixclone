import { useState, useEffect } from 'react';
//API
import API from '../API';
//helpers
import { isPersistedState } from '../helpers';
//types
import { Actor } from '../types/Types';

export const useActorInfoFetch = (actorId:number) => {
    const [ actorInfo, setActorInfo ] = useState<Actor>();
    const [ loading, setLoading ] = useState(false);
    const [ error, setError ] = useState(false);

    useEffect(() => {
        const fetchActorInfo = async () => {
            if(isNaN(actorId)) {
                setError(true);
                return;
            }
    
            try {
                setLoading(true);
                setError(false);

                const actor = await API.fetchActorInfo(actorId);
                const actorCredits = await API.fetchActorInfoMovieCredits(actorId);
               //const actorExternalIds = await API.fetchActorExternalSources(actorId);

                //filter out things without a release date & the role isnt listed 
                const releasedCredits = actorCredits.cast.filter((movie) => movie.release_date !== "" && movie.character !== "" && movie.poster_path !== null );
                //order by release date so most recent is first 
                const sortedCredits = releasedCredits.sort((a: { release_date: string; },b: { release_date: string; }) => Date.parse(b.release_date) - Date.parse(a.release_date));
                
                setActorInfo({
                    ...actor,
                    credits: sortedCredits,
                });

                setLoading(false);

            } catch(error) {
                setError(true);
            }
        }

        
        //check session storage before calling function to grab actor info
        const sessionState = isPersistedState(actorId.toString());
        if(sessionState){
            console.log('grabbing from session storage');
            setActorInfo(sessionState);
            setLoading(false);
            return;
        }

        //call fetch here
        fetchActorInfo();

    }, [actorId]);

    //write to session storage after fetching movie
    useEffect(() => {
        sessionStorage.setItem(actorId.toString(), JSON.stringify(actorInfo));
    }, [actorId, actorInfo]);

    return { actorInfo, loading, error }

}