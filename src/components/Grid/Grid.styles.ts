import styled from 'styled-components';

export const Wrapper = styled.div`
    //TODO - test and see if I can get more movies to display if I change the width here 
    //also kind of want to display movie information underneath each movie? 
    max-width: var(--maxWidth);  //control the width of the grid only displaying 5 in a row, maybe play with this if I decide to go full-screen with it
    margin: 0 auto;
    padding: 0 20px 20px 20px;

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
    grid-gap: 1.3rem; //spacing between rows/columns

    @media screen and (max-width: 768px) {
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); //css grid syntax here for a responsive grid
    }

    @media screen and (max-width: 500px) {
        grid-template-columns: repeat(auto-fill, minmax(100px, 1fr)); //css grid syntax here for a responsive grid
    }
`;

