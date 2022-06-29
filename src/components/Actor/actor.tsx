import React from 'react';
//styles
import { Wrapper, Image } from './Actor.styles';

interface IActor {
    name: string,
    character: string,
    imageURL: string
}

const Actor = ({name, character, imageURL} : IActor) => (
    <Wrapper>
        <Image src={imageURL} alt='actor-thumb' />
        <h3>{name}</h3>
        <p>Plays: {character} </p>
    </Wrapper>
)

export default Actor;