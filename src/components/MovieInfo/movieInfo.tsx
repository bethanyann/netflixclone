import React from 'react';
import Moment from 'react-moment';
//styles
import { Wrapper, Content, Text } from './MovieInfo.styles';
//component
import Thumbnail from '../MovieThumbnail/thumbnail';
//utils
import { convertMoney, calcTime } from '../../helpers';
//config
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config';
//image
import NoImage from '../../images/no_image.jpg';
//types



const MovieInfo = ({movie}:any) => (
    <Wrapper backdrop={movie.backdrop_path}>
        <Content>
            <Thumbnail image={movie.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}` : NoImage }
            clickable={false}
            hoverEffect={false}
            alt='movie-thumb' />
            <Text> 
                <h1>{movie.title}</h1>
                <h2>{movie.tagline}</h2>
                <h3>PLOT</h3>
                <p>{movie.overview}</p>

                <div className="rating-directors">
                    <div>
                        <h3>RATING</h3>
                        <div className="score">{movie.vote_average}</div>
                    </div>
                    <div className="director">
                        <h3>DIRECTOR {movie.directors.length > 1 ? 'S' : ''}</h3>
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
                                <p key={genre.id} style={{display:'inline'}}>{genre.name} + </p>
                            ))
                        }

                    </div>
                    <div className="director">
                        <h3>RELEASE DATE</h3>
                        <p><Moment format="MMMM YYYY">{movie.release_date}</Moment></p>
                    </div>
                </div>
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
)

export default MovieInfo;