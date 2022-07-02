import React from 'react';
import { Link } from 'react-router-dom';
//styles
import { SmallThumbnail, LargeThumbnail, Wrapper } from './Thumb.styles';

//interface for the props being passed in
interface Props {
    image: string,
    movieId?: string | undefined,
    clickable: boolean,
    alt: string,
    hoverEffect: boolean
}

//destructuring out the props being passed in so you don't have to do props.image, props.movieId etc
const Thumbnail = ({ image, movieId, clickable} : Props) => {

    return (
        <Wrapper>
            {clickable ? (
                <Link to={`/${movieId}`}>
                    <SmallThumbnail src={image} alt='movie-thumbnail'/> 
                </Link>
            ) : (
                <LargeThumbnail src={image} alt='movie-thumbnail' /> 
            )}
        </Wrapper>
    );
};

export default Thumbnail;