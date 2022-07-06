import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
//context
import { MyContext } from '../../context';
//images
import Logo from '../../images/react-movie-logo.svg';
import TMDBLogo from '../../images/tmdb_logo2.svg';
//styles
import { Wrapper, Content, LogoImg, TMDBLogoImg } from './Header.styles';

//arrow functions give you an implicit return, vs just writing out as a function you need a return statement 
const Header = () => {
    //grab user from the context
    const [user] = useContext(MyContext);
    //console.log(user);
    return(
        <Wrapper>
            <Content>
                <Link to='/' >
                    <LogoImg src={Logo} alt='logo' />
                </Link>
                <div>
                {/* {
                    user ? (
                        <span className='logged-in'>Logged in as: {user.username}</span>
                    ) :
                    (
                        <Link to="/login">Log In</Link>
                    )
                } */}
                    <a href='https://www.themoviedb.org/'>
                        <TMDBLogoImg src={TMDBLogo} alt='the movie database attribution logo' />
                    </a>

                </div>
              
            </Content>
        </Wrapper>

    )
}   

export default Header;