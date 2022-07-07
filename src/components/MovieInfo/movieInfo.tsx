import React, { useContext, useState } from 'react';
import Moment from 'react-moment';
import ReactModal from 'react-modal';
//styles
import { Wrapper, Content, Text } from './MovieInfo.styles';
//component
import Thumbnail from '../MovieThumbnail/thumbnail';
import Rate from '../Rating/rating';
import IMDBLogo from '../../images/imdb.png';
//utils
import { convertMoney, calcTime, embedTrailer } from '../../helpers';
//config
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config';
//context
import { MyContext } from '../../context';
import API from '../../API';
//image
import NoImage from '../../images/no-image-found.png';
import Youtube from '../../images/Youtube-Logo-Small.png';
//types
import { Movie } from '../../types/Types';

interface Props {
    movie: Movie;
}

const MovieInfo = ({movie}: Props) => {
    const [user] = useContext(MyContext);
    const [isOpen, setOpen] = useState(false);
    
    const handleRating = async (rating: number) => {
        const rate = await API.rateMovie(user.sessionId, movie.id, rating);
    }

    return (
        <Wrapper backdrop={movie.backdrop_path}>
            <Content>
                <Thumbnail image={movie.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}` : NoImage }
                    clickable={false}
                    hoverEffect={false}
                    alt='movie-thumb' />
                <Text> 
                    <h1>{movie.title}</h1>
                    <h2>{movie.tagline}</h2>

                    <div className="movie-extra">
                        <div className='certification'>{movie.extraMovieData.certification ?? ''}</div>
                        <div>(<Moment format="MMM YYYY">{movie.release_date}</Moment>),</div>
                        <div style={{marginLeft:'8px'}}>{calcTime(movie.runtime)}</div>
                    </div>

                    <h3>PLOT</h3>
                    <p>{movie.overview}</p>


                    <div className="rating-directors">
                        <div className="movie-section">
                            <h3>RATING</h3>
                            <div className="score">{movie.vote_average}</div>
                        </div>
                        <div className="movie-section">
                            <h3>DIRECTOR{movie.directors.length > 1 ? 'S' : ''}</h3>
                            {
                                movie.directors.map( (director: any) => (
                                    <p key={director.credit_id}>{director.name}</p>
                                ))
                            }
                        </div>
                        <div className="movie-section">
                            <h3>GENRES</h3>
                            {
                                movie.genres.map((genre:any) => (
                                    <p className='genres' key={genre.id} style={{display:'inline'}}>{genre.name}</p>
                                ))
                            }
                        </div>
                        <div className="movie-section">
                            <h3></h3>
                            <a className="imdb-image" target="_blank" rel="noreferrer nofollow" href={`https://www.imdb.com/title/${movie.imdb_id}`}><img src={IMDBLogo} alt='imdb-logo' /></a>
                        </div>
                    </div>
                    <div className="rotten-tomatoes">
                        <div className="movie-section">
                            <h3 className="title">ROTTEN TOMATOES</h3>
                            <div className="rating">
                                {movie.extraMovieData.ratings.map((rating) => rating.source === 'tomatoes' ? 
                                <div key={rating.source}>
                                    {rating.score < 40 ? 
                                        <img className="rotten-tomato-image" src="https://www.rottentomatoes.com/assets/pizza-pie/images/icons/tomatometer/tomatometer-rotten.f1ef4f02ce3.svg" alt='tomato-icon' />
                                        : <img className="rotten-tomato-image" src="https://www.rottentomatoes.com/assets/pizza-pie/images/icons/tomatometer/tomatometer-fresh.149b5e8adc3.svg" alt='tomato-icon' />
                                    }
                                    <p className='tomato-rating'>{rating.score}%</p> 
                                </div> :
                                rating.source === 'tomatoesaudience' ? 
                                <div key={rating.source}> 
                                    <img className="rotten-tomato-image" style={{marginLeft: '20px'}} src="https://www.rottentomatoes.com/assets/pizza-pie/images/icons/audience/aud_score-fresh.6c24d79faaf.svg" alt='audience-icon' />
                                    <p className='tomato-rating'>{rating.score}%</p> 
                                    
                                </div> :
                                null
                                )}
                            </div>
                            <div className="description">
                                <p style={{fontSize:'initial'}}>TOMATOMETER</p>
                                <p className="text">AUDIENCE SCORE</p>
                            </div>
                        </div>
                       { movie.extraMovieData.trailer && 
                            <div className="movie-section">
                            <h3>WATCH TRAILER</h3>
                                <button style={{cursor:'pointer'}} onClick={()=> setOpen(true)}><img style={{width:'70px'}} src={Youtube} alt='youtube-logo'/></button>
                                {/* <a href={embedTrailer(movie.extraMovieData.trailer)}><img style={{width:'70px'}} src={Youtube} alt='youtube-logo'/></a> */}
                            </div>                       
                       }
                    </div>
                    {
                    /* { only show rating if user is currently logged in } */
                        // user ? 
                        // <div className='rating-directors'>
                        //     <div className="rating">
                        //         <p>RATE MOVIE:</p>
                        //         <Rate callback={handleRating} />
                        //     </div>
                        // </div>
                        // : null
                    }
                    {isOpen && movie.extraMovieData.trailer ?
                        <ReactModal isOpen={isOpen} onRequestClose={() => setOpen(false)} 
                        style={{
                            content: {
                                width: 900,
                                height: 700,
                                margin: 'auto',
                                overflow: 'none',
                                padding: 0,
                                paddingTop: 20
                            }

                        }}>
                            <iframe height='650' width='850' title={`${movie.title} trailer`} src={embedTrailer(movie.extraMovieData.trailer)}></iframe>
                        </ReactModal> 
                        : null
                    }

                    <div className="movie-info">
                        <div className="movie-section">
                            <p ><strong>Run Time:  </strong>{calcTime(movie.runtime)}</p>
                        </div>
                        <div className="movie-section">
                            <p><strong>Budget:  </strong>{movie.budget <= 0 ? 'Unknown' : convertMoney(movie.budget)}</p>
                        </div>
                        <div className="movie-section">
                            <p><strong>Revenue:  </strong>{movie.revenue <= 0 ? 'Unknown' : convertMoney(movie.revenue)}</p>
                        </div>
                    </div>
                </Text>
            </Content>
        </Wrapper>
    );
}
export default MovieInfo;