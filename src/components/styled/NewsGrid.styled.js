import styled from 'styled-components'

export const StyledNewsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
`

export const StyledNewsCard = styled.div`
    max-height: 70rem;
    color: ${({ theme }) => theme.dark};
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;
    gap: 2rem;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.lightDim};
    margin: 1rem;
    padding: 2rem;
    box-shadow: ${({ theme }) => theme.dark15} 0px 1px 4px;
    cursor: pointer;
    transition: all 100ms ease-in-out;

    &:hover {
        transform: scale(1.025);
    }

    h3 {
        font-size: 1.5rem;
        font-weight: 500;
        text-align: justify;
    }

    div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }

    span {
        font-size: 1.3rem;
        font-weight: 400;
    }

    img {
        width: 95%;
        height: 15rem;
        margin: 0 auto;
        object-fit: cover
    }

    &:hover h3 {
        color: ${({ theme }) => theme.dark10};
    }
    
    &:hover span {
        color: ${({ theme }) => theme.dark10};
    }
`