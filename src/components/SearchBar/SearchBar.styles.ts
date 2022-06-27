import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    align-items: center;  //vertically centers the search bar area
    height: 100px;
    background: var(--darkGray);
    padding: 0 20px;

    @media screen and (max-width: 720px)
    {
        height: 70px;
    }
`;

export const Content = styled.div`
    position: relative; //because we want to place the icon with an absolute position inside this
    max-width: var(--maxWidth);
    width: 600px;
    height: 55px;
    background: var(--medGray);
    margin: 0 auto;   //this controls centering the search bar, which I am not sure I am a huge fan of. Maybe change this later? 
    border-radius: 40px;
    color: var(--white);

    @media screen and (max-width: 720px)
    {
        height: 40px;
    }
    

    img {
        position: absolute;
        left: 15px;
        top: 14px;
        width:30px;

        @media screen and (max-width: 720px)
        {
           width: 25px;
           top: 8px;
        }
    
    }

    input {
        font-size: 28px;
        position: absolute;
        left: 0;
        margin: 8px 0;
        padding: 0 0 0 60px;
        border: 0;
        width: 95%;
        background: transparent;
        height: 40px;
        color: var(--white);

        :focus {
            outline: none; //remove the highlight around the input box when in focus
        }

       
        @media screen and (max-width: 720px)
        {
            margin: 0 0;
            font-size: var(--fontMed);
        }
    
    }
`;