import styled from 'styled-components';
//import image sizes
import { IMAGE_BASE_URL, BACKDROP_SIZE } from '../../config';


interface Props {
    backdrop: string;
}

export const Wrapper = styled.div<Props>`
    background: ${props => props.backdrop ? `url('${IMAGE_BASE_URL}${BACKDROP_SIZE}${props.backdrop}')` : '#000' };
    background-size: cover;
    background-position: center;
    padding: 40px 20px;
    animation: animateMovieInfo 1s;

    @keyframes animateMovieInfo {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;

export const Content = styled.div`
    display: flex;
    max-width: var(--maxWidth);
    margin: 0 auto;
    background: rgba(0, 0, 0, 0.9);
    border-radius: 20px;

    @media screen and (max-width: 768px) {
        display: block; 
        max-height: none;
    }
`;

export const Text = styled.div`
   
    width: 100%;
    padding: 20px 40px;
    color: var(--white);
    overflow: hidden;

    .rating-directors {
        display: flex;
        justify-content: flex-start;
    }

    .rating {
        display: flex;
        justify-content: flex-start;
        margin-top: 20px;
    }

    .movie-info {
        display: flex;
        justify-content: space-between;
        align-content: center;
        margin-top: 200px;
        margin-bottom: auto;

        @media screen and (max-width: 1100px){
            margin-top: 60px;
            font-size: var(--fontMed);
        }
    }

    .score {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 38px;
        height: 38px;
        background: var(--lightBlue);
        color: var(--darkGray);
        font-weight: 800;
        border-radius: 50%;
        margin: 0;
        margin-left: 5px;
    }

    .director {
        :nth-child(2),:nth-child(3),:nth-child(4){
            margin: 0 0 0 40px;
        }
        p {
            margin: 0;
            font-size: var(--fontMed);

            @media screen and (max-width: 1100px)
            {
                font-size: medium;
            }
        }

        .genres:not(:last-child):after {
                color: var(--lightGreen);
                content: " + ";
        }

    }

    h1 {
        margin-bottom: 0;
        position: relative;

        @media screen and (max-width: 1100px) {
            font-size: var(--fontBig);
        }
        @media screen and (max-width: 768px) {
            font-size: larger;
        }
    }

    h2{
        font-style: italic;
        margin-top: 0;

        @media screen and (max-width: 1100px) {
            font-size: larger;
            margin-top:10px;
        }
        
    }

    h3{
        margin-top: 50px;
    }

    span {
        position: absolute;
        top: 7px;
        //left: 153px;
        //padding-left: 15px;
        margin-left: 20px;
        font-size: 1.3rem;
        align-items: center;
    }

  
`;

