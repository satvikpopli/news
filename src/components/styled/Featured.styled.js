import styled from 'styled-components'

export const StyledFeatured = styled.section`
    padding: 2rem;
    height: 70vh;
    width: 100vw;
    display: flex;

    img {
        max-height: 100%;
        max-width: 55vw;
        width: auto;
        filter: grayscale(50%);
    }
`

export const StyledDetails = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 3rem 5rem;

    h2 {
        font-size: 4rem;
        font-family: 'PT serif';
    }

    p {
        font-size: 2rem;
        font-weight: 300;
        text-align: justify;
    }
`