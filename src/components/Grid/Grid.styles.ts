import styled from 'styled-components';

export const Wrapper = styled.div`
    max-width: var(--maxWidth);
    margin: 0 auto;
    padding: 0 20px;

    h1{
        color: var(--medGrey);

        @media screen and (max-width: 768px){
            font-size: var(--fontBig);
        }
    }
`;

export const Content = styled.div`
    display: grid;
    // set to repeat the columns, and then set it to auto fill, and then when its 200px wide it cant' go lower so it removes 1 column instead to make it responsive for mobile
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); //css grid syntax here for a responsive grid
    grid-gap: 2rem; //spacing between rows/columns
`;

