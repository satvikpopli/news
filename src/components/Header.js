import React from 'react'
import Search from "./Search";
import ToggleTheme from './ToggleTheme';
import { StyledHeader } from './styled/Header.styled'
import { StyledNavbar } from './styled/Header.styled'

const categories = ['Finance', 'Tech', 'Celebrity', 'Politics', 'Marketing'];

export default function Header({onClick, theme, onCategoryChange}) {
    return (
        <>
            <StyledHeader>
                <h1>News Central<span>&trade;</span></h1>
                <div className='separate'>
                    <Search theme={theme} />
                    <ToggleTheme onClick={onClick} />
                    <a href="">SUBSCRIBE</a>
                </div>
            </StyledHeader>
            <StyledNavbar>
                {categories.map((category, index) => {
                    return <button key={index} onClick={(e) => onCategoryChange(e.target.innerText)}>{category}</button>
                })}
            </StyledNavbar>
        </>
    )
}