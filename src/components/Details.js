import React from 'react'
import { StyledDetails } from './styled/Featured.styled'
import Btn from './Btn'

export default function Details({featuredArticle}) {
    return (
        <StyledDetails>
            <h2>{featuredArticle.title}</h2>
            <p>{featuredArticle.description}</p>
            <Btn url={featuredArticle.url} text={"Read More"} />
        </StyledDetails>
    )
}