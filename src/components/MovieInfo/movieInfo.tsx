import React, { useContext } from 'react';
import Moment from 'react-moment';
//styles
import { Wrapper, Content, Text } from './MovieInfo.styles';
//component
import Thumbnail from '../MovieThumbnail/thumbnail';
import Rate from '../Rating/rating';
//utils
import { convertMoney, calcTime } from '../../helpers';
//config
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config';
//context
import { MyContext } from '../../context';
import API from '../../API';
//image
import NoImage from '../../images/no-image-found.png';

import { Movie } from '../../types/Types';

interface Props {
    movie: Movie;
}

const MovieInfo = ({movie}: Props) => {

    const [user] = useContext(MyContext);

    const handleRating = async (rating: number) => {
        // testing ratings data here because I can.
        const ratingsData = await API.getRatingsData('tt0887912');
        console.log(ratingsData);
        // const rate = await API.rateMovie(user.sessionId, movie.id, rating);
    }

    return (
        <Wrapper backdrop={movie.backdrop_path}>
            <Content>
                <Thumbnail image={movie.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}` : NoImage }
                clickable={false}
                hoverEffect={false}
                alt='movie-thumb' />
                <Text> 
                    <h1>{movie.title}<span>(<Moment format="YYYY">{movie.release_date}</Moment>)</span></h1>
                    <h2>{movie.tagline}</h2>
                    <h3>PLOT</h3>
                    <p>{movie.overview}</p>

                    <div className="rating-directors">
                        <div>
                            <h3>RATING</h3>
                            <div className="score">{movie.vote_average}</div>
                        </div>
                        <div className="director">
                            <h3>DIRECTOR{movie.directors.length > 1 ? 'S' : ''}</h3>
                            {
                                movie.directors.map( (director: any) => (
                                    <p key={director.credit_id}>{director.name}</p>
                                ))
                            }
                        </div>
                        <div className="director">
                            <h3>GENRES</h3>
                            {
                                movie.genres.map((genre:any) => (
                                    <p className='genres' key={genre.id} style={{display:'inline'}}>{genre.name}</p>
                                ))
                            }
                        </div>
                        <div className="director">
                            <h3>RELEASE DATE</h3>
                            <p><Moment format="MMMM YYYY">{movie.release_date}</Moment></p>
                        </div>
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
                    <div className="movie-info">
                        <div className="director">
                            <p ><strong>Run Time:  </strong>{calcTime(movie.runtime)}</p>
                        </div>
                        <div className="director">
                            <p><strong>Budget:  </strong>{movie.budget <= 0 ? 'Unknown' : convertMoney(movie.budget)}</p>
                        </div>
                        <div className="director">
                            <p><strong>Revenue:  </strong>{movie.revenue <= 0 ? 'Unknown' : convertMoney(movie.revenue)}</p>
                        </div>
                    </div>
                </Text>
            </Content>
        </Wrapper>
    );
}
export default MovieInfo;