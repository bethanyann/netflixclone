import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    align-items: center;  //vertically centers the search bar area
    height: 100px;
    background: var(--darkGray);
    padding: 0 20px;

    @media screen and (max-width: 768px)
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

    @media screen and (max-width: 768px)
    {
        height: 40px;
    }
    

    img {
        position: absolute;
        left: 15px;
        top: 14px;
        width:30px;

        @media screen and (max-width: 768px)
        {
           width: 25px;
           top: 8px;
        }
    
    }

    input {
        font-size: var(--fontBig);
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

       
        @media screen and (max-width: 768px)
        {
            margin: 0 0;
            font-size: var(--fontMed);
        }
    
    }

    h1{
        position: absolute;
        right: 0px;
        width: 44px;
        margin: 0;
        top: 0px;
        background: #303030;
        font-size: 20px;
        padding: 15px 0px 16px 0px;
        align-items: center;
        text-align: center;
        border-top-right-radius: 40px;
        border-bottom-right-radius: 40px;
        font-weight: bolder;
        cursor: pointer;

        @media screen and (max-width: 768px)
        {
            font-size: 18px;
            padding: 8px 0px 10px 0px;
        }
    }
`;