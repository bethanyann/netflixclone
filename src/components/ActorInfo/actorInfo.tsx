import React from 'react';
import { useParams, Link } from 'react-router-dom'; //this is how you get the movieId prop from the router 
//styles
import { Wrapper, Content, Text } from './ActorInfo.styles';
import { Scrollbars } from 'react-custom-scrollbars-2';
import ShadowScrollbar from '../ShadowScrollbar/shadowScrollbar';
//API
import { useActorInfoFetch } from '../../hooks/useActorInfoFetch';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config';
//components
import { Spinner } from '../Spinner/Spinner.styles';
import Thumbnail from '../MovieThumbnail/thumbnail';
import NoImage from '../../images/no_image.jpg'
import NotFound from '../NotFound';
import IMDBLogo from '../../images/imdb.png';

const ActorInfo = () => {

    const { actorId } = useParams();
    const actorID = Number(actorId);
    const {actorInfo, loading, error} = useActorInfoFetch(actorID);

    if(loading) return <div> <Spinner /></div>
    if(error) return <div> Something went wrong... </div>
    
    //create the styles
    //TODO can add a link to their IMDB page : https://www.imdb.com/name/nm0000179/
    //TODO take hover off of the thumbnail 


    return (
        <>
        <Wrapper>
            <Content>
            <Thumbnail actor={true} image={actorInfo?.profile_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actorInfo.profile_path}` : NoImage }
            clickable={false}
            alt='actor-thumb' />
            <Text> 
                {
                    actorInfo ? 
                    <>
                    <h1>{actorInfo.name} <a target="_blank" rel="noreferrer nofollow" href={`https://www.imdb.com/name/${actorInfo.imdb_id}`}><img src={IMDBLogo} alt='imdb-logo'/></a> </h1>
                    <h3>BIOGRAPHY</h3>
                    <ShadowScrollbar  style={{height: 300, right: 0, top: 3}}>
                        <p className='actor-bio'>{actorInfo.biography}</p>
                    </ShadowScrollbar>
                                     
                    <div className="actor-info">
                        <div className="director">
                            <h3>Place of Birth</h3>
                            <div>{actorInfo.place_of_birth}</div>
                        </div>
                        <div className="director">
                            <h3>BIRTHDAY</h3>
                            <div>{actorInfo.birthday}</div>
                        </div>
                        
                    </div>
                    </>
                    :
                    <NotFound/>
                }
               
            </Text>
            </Content>
        </Wrapper>
        </>
    )
}

export default ActorInfo;