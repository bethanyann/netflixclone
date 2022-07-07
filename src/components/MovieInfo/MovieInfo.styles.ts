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
        justify-content: space-between;

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
            margin: 0 auto;
        }

        @media screen and (max-width: 1100px)
        {
            justify-content: space-around;

            h3 {
                font-size: var(--fontSmall);
                font-weight: 400;
            }

            .score{
                width: 28px;
                height: 28px;
            }
        }
    }

    .movie-info {
        display: flex;
        justify-content: space-between;
        align-content: center;
        margin-top: 70px;
        margin-bottom: auto;

        @media screen and (max-width: 1100px){
            margin-top: 60px;
            font-size: var(--fontMed);
        }
    }

    

    .movie-section {
        :nth-child(2),:nth-child(3),:nth-child(4){
            margin: 0 20px 0 20px;
        }

        p {
            margin: 0;
            font-size: var(--fontMed);

            @media screen and (max-width: 1100px)
            {
                font-size: medium;
            }
        }

        .imdb-image{

            img {
                width: 65px;
                height: 40px;
                margin-top: 10px;
            }

            @media screen and (max-width: 1100px){
                img {
                    width: 50px;
                    height: 30px;
                    margin-top: 20px;
                }
            }
        }
        
        .genres:not(:last-child):after {
            color: var(--lightGreen);
           // white-space: nowrap;
            content: " + ";
        }
    }

    .movie-extra {
        display: flex;
        justify-content: flex-start;
   
        .certification {
            border-radius: 5px;
            border: 2px solid var(--lightGreen);
            padding: 1px 4px;
            margin-right: 10px;
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

   
    .rotten-tomatoes {
        display: flex;
        justify-content: space-between;
        font-size: x-large;
        margin-top: 20px;
    

        .title {
            margin-bottom: 0;
        }
        .rating {
            display: flex;
            justify-content: flex-start;
            margin-top: 10px;
        }

        .tomato-rating {
            margin: 0;
            font-size: xx-large;
            display: inline;
        }


        .rotten-tomato-image {
            width: 35px;
            //height: 30px;
            display: inline; 
            margin-right: 5px;
        }

        .description {
            display: flex;
            margin-top: 3px;
            .text{
                margin-left: 20px;
                font-size: initial;
            }
        }

        //react modal styles
        .ReactModal__Overlay {
            opacity: 0;
            transition: opacity 2000ms ease-in-out;
        }

        .ReactModal__Overlay--after-open{
            opacity: 1;
        }

        .ReactModal__Overlay--before-close{
            opacity: 0;
        }
    }

    

  
  
`;

