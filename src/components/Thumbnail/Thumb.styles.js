import styled from 'styled-components';

export const Image = styled.img`    
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