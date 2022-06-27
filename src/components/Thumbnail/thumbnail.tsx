import React from 'react';
//styles
import { Image } from './Thumb.styles';

//interface for the props being passed in
interface Props {
    image: string,
    movieId: string,
    clickable: boolean
}

//destructuring out the props being passed in so you don't have to do props.image, props.movieId etc
const Thumbnail: React.FC<Props> = ({ image, movieId, clickable}) => (
 <div>
     <Image src={image} alt='movie-thumbnail' /> 
 </div>
);

export default Thumbnail;