import React from 'react'
import NewsCard from './NewsCard'
import { StyledSection } from './styled/Section.styled'
import { StyledNewsGrid } from './styled/NewsGrid.styled'

export default function Trending({articles}) {
  return (
    <StyledSection>
      <h2>Trending - This Week</h2>
      <StyledNewsGrid>
        {articles.map((news, index) => {
          return (<NewsCard key={index} title={news.title} newsURL={news.url} imgURL={news.urlToImage} date={news.publishedAt} />)
        })}
      </StyledNewsGrid>
    </StyledSection>
  )
}