import styled from 'styled-components'

export const StyledToggleTheme = styled.div`
    border: 2px solid ${({ theme }) => theme.darkDim};
    padding: 0.2rem;
    height: 3rem;
    width: 6rem;
    border-radius: 10em;
    display: flex;
    cursor: pointer;
    position: relative;

    .circle {
        background-color: ${({ theme }) => theme.darkDim};
        width: 2.25rem;
        height: 100%;
        border-radius: 10em;
        position: relative;
        transition: all 300ms ease-in-out;
        left: ${({ theme }) => theme.name === 'light' ? '0' : '2.9rem'};
    }
`