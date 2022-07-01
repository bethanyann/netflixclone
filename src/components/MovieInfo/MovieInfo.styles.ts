import styled from 'styled-components';
//import image sizes
import { IMAGE_BASE_URL, BACKDROP_SIZE } from '../../config';


interface IWrapper {
    backdrop: string;
}

export const Wrapper = styled.div<IWrapper>`
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

    .movie-info {
        display: flex;
        justify-content: space-between;
        align-content: center;
        margin-top: 200px;
        margin-bottom: auto;
    }

    .score {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 38px;
        height: 38px;
        background: var(--white);
        color: #000;
        font-weight: 800;
        border-radius: 50%;
        margin: 0;
    }

    .director {
        :nth-child(2),:nth-child(3),:nth-child(4){
            margin: 0 0 0 40px;
        }
        p {
            margin: 0;
            font-size: var(--fontMed);
        }
    }

    h1 {
        margin-bottom: 0;
        @media screen and (max-width: 768px) {
            font-size: var(--fontBig);
        }
    }

    h2{
        font-style: italic;
        margin-top: 0;
        
    }

    h3{
        margin-top: 50px;
    }

  
`;

