import styled from 'styled-components'

const StyledHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem clamp(3rem, 21.429vw - 15.429rem, 6rem);
    min-height: 10rem;
    h1 {
        font-family: 'PT serif', sans-serif;
        font-size: clamp(6rem, 6.818vw - 0.818rem, 9rem);
        font-weight: 700;
        font-style: italic;
        letter-spacing: -1px;
        position: relative;
    }

    h1 span {
        font-size: 2rem;
        font-weight: 500;
        display: inline-block;
        position: absolute;
        top: 2rem;
        right: -3rem;
    }

    .separate {
        max-width: 45%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex: 1;
    }

    a {
        background-color: ${({ theme }) => theme.dark};
        color: ${({ theme }) => theme.light};
        padding: 0.75rem 1.5rem;
        font-size: 1.25rem;
        border-radius: 5px;
        text-decoration: none;
        cursor: pointer;
        transition: all 100ms ease-in-out;
    }

    a:hover {
        transform: scale(1.025);
    }
`

const StyledSearch = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;
    font-size: 1.5rem;
    cursor: pointer;
`

const StyledNavbar = styled.nav`
    border-top: 1px solid ${({ theme }) => theme.dark15};
    border-bottom: 1px solid ${({ theme }) => theme.dark15};
    min-height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;

    button {
        width: 16rem;
        padding: 1.25rem 0;
        outline: none;
        border: none;
        color: ${({ theme }) => theme.dark};
        text-decoration: none;
        font-size: 1.75rem;
        background-color: transparent;
        height: 100%;
        cursor: pointer;
    }

    button:hover {
        background-color: ${({ theme }) => theme.dark05};
    }
`

export { StyledHeader, StyledNavbar, StyledSearch };