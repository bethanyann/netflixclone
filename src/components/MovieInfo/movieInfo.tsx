import React from 'react';
//styles
import { Wrapper, Content, Text } from './MovieInfo.styles';
//component
import Thumbnail from '../MovieThumbnail/thumbnail';
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
            alt='movie-thumb' />
            <Text> 
                <h1>{movie.title}</h1>
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
                </div>
            </Text>
        </Content>
    </Wrapper>
)

export default MovieInfo;