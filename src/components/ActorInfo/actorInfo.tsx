import React from 'react';
import { useParams, Link } from 'react-router-dom'; //this is how you get the movieId prop from the router 
//styles
import { Wrapper, Content, Text } from './ActorInfo.styles';
//API
import { useActorInfoFetch } from '../../hooks/useActorInfoFetch';
//components
import { Spinner } from '../Spinner/Spinner.styles';


const ActorInfo = () => {

    //console.log(actorId);
  
    //use params here to get the actor id out of the url
    const { actorId } = useParams();
    // //convert it to number
     const actorID = Number(actorId);
    // //get actor data from the hook here
     const {actorInfo, loading, error} = useActorInfoFetch(actorID);

     if(loading) return <div> <Spinner /></div>
     if(error) return <div> Something went wrong... </div>
    
    //create the hook
    //create the route param
    //create the actor info component
    //create the styles
    //can add a link to their IMDB page : https://www.imdb.com/name/nm0000179/

    return (
        <>

        </>
    )
}

export default ActorInfo;