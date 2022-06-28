import React from 'react';
import { Link } from 'react-router-dom';
//styles
import { Wrapper, Content } from './BreadCrumb.styles';
import apiSettings from './../../API';

interface IBreadcrumb {
    movieTitle: string;
}

const BreadCrumb = ({ movieTitle }: IBreadcrumb) => (
    <Wrapper>
        <Content>
            <Link to='/'>
                <span> Home </span>            
            </Link>
            <span> | </span>
            <span> {movieTitle} </span>
        </Content>
    </Wrapper>
)

export default BreadCrumb;