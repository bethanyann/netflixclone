import React from 'react';
//styles
import { Wrapper, Content, Text } from './HeroImage.styles';

interface Props {
    image: string;
    title: string;
    text: string;
}

const HeroImage = (props: Props) => (
    <Wrapper image={props.image} >
        <Content>
            <Text>
                <h1>{props.title}</h1>
                <p>{props.text}</p>
            </Text>
        </Content>
    </Wrapper>
);

export default HeroImage;