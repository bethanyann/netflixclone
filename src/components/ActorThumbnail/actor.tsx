import React from 'react';
import { Link } from 'react-router-dom';
//styles
import { Wrapper, Image } from './Actor.styles';

interface IActor {
    actorId: number,
    name: string,
    character: string,
    imageURL: string
}

//these will always be 'clickable' so there is no flag to allow clicking or not - for now
const Actor = ({actorId, name, character, imageURL} : IActor) => (
    <Wrapper>
        <Link to={`/actor/${actorId}`}>
            <Image src={imageURL} alt='actor-thumb' />
        </Link>
        <h3>{name}</h3>
        <p><strong>Role: </strong> {character} </p>
    </Wrapper>
)

export default Actor;