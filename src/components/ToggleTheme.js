import React from 'react'
import { StyledToggleTheme } from './styled/ToggleTheme.styled'

export default function ToggleTheme({onClick}) {
    return (
        <StyledToggleTheme onClick={onClick}>
            <div className='circle'></div>
        </StyledToggleTheme>
    )
}