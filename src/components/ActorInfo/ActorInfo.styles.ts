import styled from 'styled-components';


export const Wrapper = styled.div`
    background: var(--darkGray);
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
    background: rgba(0, 0, 0, 0.8);
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

    .actor-info {
        display: flex;
        justify-content: flex-start;
        margin-top: 30px;
    }

    .score {
        display: flex;
        align-items: center;
        justify-content: center;
      //  width: 40px;
      //  height: 40px;
        color: var(--white);
        font-weight: 800;
        margin: 0;
    }

    .director {
        :nth-child(2),:nth-child(3){
            margin: 0 0 0 40px;
        }
        p {
            margin: 0;
        }
    }

    h1 {
        display: flex;
        justify-content: space-between;
        @media screen and (max-width: 768px) {
            font-size: var(--fontBig);
        }
    }

    .actor-bio {
        white-space: pre-wrap;
       
    }

    img {
        width: 65px;
        height: 40px;
      //  display: flex;
        margin-top: 32px;
        justify-content: end;
    }

    .imdb-image{
       // margin: 0 0 0 40px;
        margin-left: auto;
        margin-right: 10px;
    }
`;

