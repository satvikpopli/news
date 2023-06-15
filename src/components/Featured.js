import React from 'react'
import Details from './Details'
import { StyledFeatured } from './styled/Featured.styled'

export default function Featured({ featuredArticles }) {
    return (
        <>
            <StyledFeatured>
                <img src={featuredArticles[0].urlToImage} alt="featured-image" />
                <Details featuredArticle={featuredArticles[0]} />
            </StyledFeatured>
            <StyledFeatured>
                <Details featuredArticle={featuredArticles[1]} />
                <img src={featuredArticles[1].urlToImage} alt="featured-image" />
            </StyledFeatured>
        </>
    )
}