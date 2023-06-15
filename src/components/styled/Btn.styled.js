import styled from 'styled-components'

export const StyledBtn = styled.a`
    text-decoration: none;
    color: ${({ theme }) => theme.light};
    background-color: ${({ theme }) => theme.dark};
    width: max-content;
    padding: 1rem 2rem;
    font-size: 1.5rem;
    border-radius: 5px;
    text-transform: uppercase;
    transition: all 200ms ease-in-out;
    display: inline;

    &:hover {
        background-color: ${({ theme }) => theme.darkDim};
    }
`