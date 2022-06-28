import React from 'react';
//styles
import { Wrapper, Content } from './Grid.styles';

interface IGridProps {
    header: string;
    children: any;
}

//children is a default prop that we can use; when we nest stuff inside a compoenent its avalible in the children prop
//the Children prop in this case are going to be the movies
const Grid : React.FC<IGridProps>= ({ header, children }) => (
    <Wrapper>
        <h1>{header}</h1>
        <Content>
            {children}
        </Content>
    </Wrapper>
)

export default Grid;