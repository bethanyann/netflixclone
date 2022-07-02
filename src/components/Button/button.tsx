import React from 'react';
//styles
import { Wrapper } from './Button.styles';

interface IButton {
    text: string,
    callback:  () => void
}

//I guess this is the preferred way to type props in a functional component now, vs doing React.FC<type> like this
//TODO - change all of the React.FC declarations to this method of typing the props
const Button = ({text, callback}: IButton) => (
 <Wrapper type="button" onClick={callback}>
    {text}
 </Wrapper>
);

export default Button;