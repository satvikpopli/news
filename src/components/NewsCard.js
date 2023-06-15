import React from 'react'
import { StyledNewsCard } from './styled/NewsGrid.styled'
import Btn from './Btn'

function DateConverter(date) {
    const originalDate = date;
    const formattedDate = new Date(originalDate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
    return formattedDate;
}

export default function NewsCard({ title, newsURL, imgURL, date }) {
    return (
        <StyledNewsCard>
            <img src={imgURL} alt="" />
            <h3>{title}</h3>
            <div>
                <span>{DateConverter(date)}</span>
                <Btn className='readBtn' text={'Read More'} url={newsURL} />
            </div>
        </StyledNewsCard>
    )
}