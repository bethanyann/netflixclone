import React from 'react';
import { Link } from 'react-router-dom';
//images
import Logo from '../../images/react-movie-logo.svg';
import TMDBLogo from '../../images/tmdb_logo2.svg';
//styles
import { Wrapper, Content, LogoImg, TMDBLogoImg } from './Header.styles';

//arrow functions give you an implicit return, vs just writing out as a function you need a return statement 
const Header = () => (
    <Wrapper>
        <Content>
            <Link to='/' >
                <LogoImg src={Logo} alt='logo' />
            </Link>
            <a href='https://www.themoviedb.org/'>
                <TMDBLogoImg src={TMDBLogo} alt='the movie database attribution logo' />
            </a>
        </Content>
    </Wrapper>
);

export default Header;