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
                debugger;

                const actor = await API.fetchActorInfo(actorId);
                const actorCredits = await API.fetchActorInfoMovieCredits(actorId);

                //filter out anything from the results that I dont want (tv shows? just movies?)
                //filter out things without a release date

                //filter out things where the role isn't listed

                //order by release date
                console.log(actor);
                console.log(actorCredits);
                
                setActorInfo({
                    ...actor,
                    credits: actorCredits.cast,
                });


            } catch(error) {
                setError(true);
            }
        }

        //call fetch here
        fetchActorInfo();

    }, [actorId]);

    return { actorInfo, loading, error }

}