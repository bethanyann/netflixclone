import React, {useState} from 'react';

//styles
import { Wrapper, Content, Text } from './HeroImage.styles';


const HeroImage = (prop:any) => (
    <Wrapper image={prop.image} >
        <Content>
            <Text>
                <h1>{prop.title}</h1>
                <p>{prop.text}</p>
            </Text>
        </Content>
    </Wrapper>
);

export default HeroImage;