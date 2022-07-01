import { release } from 'os';
import { useState, useEffect } from 'react';
//API
import API from '../API';
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
               //console.log(actorExternalIds);

                //filter out things without a release date & the role isnt listed 
                const releasedCredits = actorCredits.cast.filter((movie: { release_date: string; character: string; }) => movie.release_date !== "" && movie.character !== "")
                //order by release date so most recent is first 
                const sortedCredits = releasedCredits.sort((a: { release_date: string; },b: { release_date: string; }) => Date.parse(b.release_date) - Date.parse(a.release_date));
                
                // console.log(actor.biography);
                // console.log(sortedCredits);
                
                setActorInfo({
                    ...actor,
                    credits: sortedCredits,
                });

                setLoading(false);

            } catch(error) {
                setError(true);
            }
        }

        //call fetch here
        fetchActorInfo();

    }, [actorId]);

    return { actorInfo, loading, error }

}