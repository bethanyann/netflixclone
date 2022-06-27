import styled from 'styled-components';


export const Wrapper = styled.div`
    background: var(--darkGrey);
    padding:  0 20px;

`;


export const Content = styled.div`
    display: flex; //flex allows for the items to be placed on the left and right sides
    align-items: center;  //vertically center 
    justify-content: space-between; //this will push one item to the left and one to the right
    max-width: var(--maxWidth);
    padding: 20px 0;
    margin: 0 auto; //center the content div itself
`;


export const LogoImg = styled.img`
    width: 200px;

    //when the screen size is less than 500px
    @media screen and (max-width: 500px){
      width: 150px;   
    }
`;

export const TMDBLogoImg = styled.img`
    width: 250px;

    @media screen and (max-width: 500px) {
        width: 150px;
    }
`;
