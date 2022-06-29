import React from 'react';
import { Link } from 'react-router-dom';
//styles
import { Image } from './Thumb.styles';

//interface for the props being passed in
interface IThumbnail {
    image: string,
    movieId?: string | undefined,
    clickable: boolean,
    alt: string
}

//destructuring out the props being passed in so you don't have to do props.image, props.movieId etc
const Thumbnail = ({ image, movieId, clickable} : IThumbnail) => (
 <div>
    {clickable ? (
        <Link to={`/${movieId}`}>
             <Image src={image} alt='movie-thumbnail' /> 
        </Link>
    ) : (
        <Image src={image} alt='movie-thumbnail' /> 
    )}
 </div>
);

export default Thumbnail;