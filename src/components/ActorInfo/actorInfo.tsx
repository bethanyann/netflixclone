import React from 'react';
import { useParams } from 'react-router-dom'; //this is how you get the movieId prop from the router 
import Moment from 'react-moment';
//styles
import { Wrapper, Content, Text } from './ActorInfo.styles';
import Scrollbar from '../ShadowScrollbar/shadowScrollbar';
//API
import { useActorInfoFetch } from '../../hooks/useActorInfoFetch';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config';
//components
import { Spinner } from '../Spinner/Spinner.styles';
import Thumbnail from '../MovieThumbnail/thumbnail';
import NoImage from '../../images/no-image-found.png';
import NotFound from '../NotFound';
import IMDBLogo from '../../images/imdb.png';
import Grid from '../Grid/grid';

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
            <Thumbnail hoverEffect={false} image={actorInfo?.profile_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actorInfo.profile_path}` : NoImage }
            clickable={false}
            alt='actor-thumb' />
            <Text> 
                {
                    actorInfo ? 
                    <>
                    <h1>{actorInfo.name}</h1>
                    <h3>BIOGRAPHY</h3>
                    <Scrollbar  style={{height: 300, right: 0, top: 15}}>
                        <p className='actor-bio'>{actorInfo.biography}</p>
                    </Scrollbar>
                                     
                    <div className="actor-info">
                        <div className="director">
                            <h3>PLACE OF BIRTH</h3>
                            { actorInfo.place_of_birth ? 
                                <div>{actorInfo.place_of_birth}</div>
                                : <div>No data found</div>
                            }
                        </div>
                        <div className="director">
                            <h3>BORN</h3>
                            { actorInfo.birthday ? 
                                <div><Moment format='MMMM DD, YYYY'>{actorInfo.birthday}</Moment></div>
                                : <div>No data found</div>
                            }
                        </div>
                       
                        
                        { actorInfo.deathday ? 
                                <div className="director">
                                    <h3>DIED</h3>
                                    <div><Moment format='MMMM DD, YYYY'>{actorInfo.deathday}</Moment> (<Moment duration={actorInfo.birthday} date={actorInfo.deathday} format='Y'/> years old)</div>
                                </div>
                                :
                                <div className="director">
                                    <h3>AGE</h3>
                                    {actorInfo.birthday ? 
                                     <div><Moment fromNow ago>{actorInfo.birthday}</Moment> old</div>
                                     : <div>No data found</div>   
                                    }
                                </div>
                        }
                        <div className="imdb-image">
                            <a target="_blank" rel="noreferrer nofollow" href={`https://www.imdb.com/name/${actorInfo.imdb_id}`}><img src={IMDBLogo} alt='imdb-logo' /></a>
                        </div>
                        
                    </div>
                    </>
                    :
                    <NotFound/>
                }
               
            </Text>
            </Content>
        </Wrapper>
        <Grid header='Acting Credits'>
            {actorInfo?.credits.map(movie => (
                <Thumbnail alt='movie-thumb' key={movie.id} clickable={true} hoverEffect={true} movieId={movie.id} image={movie.poster_path ? IMAGE_BASE_URL+POSTER_SIZE+movie.poster_path : NoImage }/>
            ))}
        </Grid>
    </>
    )
}

export default ActorInfo;