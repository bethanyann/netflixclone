import styled from 'styled-components';

export const SmallThumbnail = styled.img`    
    width: 100%;
    max-width: 720px;
    transition: all 0.3s; //transition on hover
    object-fit: cover; //center the image and make it fit into the thumbnails
    border-radius: 20px; //rounded corners 
    animation: animateThumb 0.5s;

        :hover {
            opacity: 0.7;
        }

        @keyframes animateThumb {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }

   
`;

export const LargeThumbnail = styled.img`
    width: 100%;
    max-width: 720px;
    transition: all 0.3s; //transition on hover
    object-fit: cover; //center the image and make it fit into the thumbnails
    border-radius: 20px; //rounded corners 

    @media screen and (max-width: 1300px){
        height:100%;
    }

    @media screen and (max-width: 768px){
       //height: 300px;
       max-width: 300px;
       margin: 0 auto;
       margin-top: 20px;
    }

    
`;

export const Wrapper = styled.div`
    @media screen and (max-width: 768px){
        display:flex;
        align-items:center;
    }
`;
