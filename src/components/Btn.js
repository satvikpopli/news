import React from 'react'
import { StyledBtn } from './styled/Btn.styled'

export default function Btn({ text, url }) {
  return (
    <StyledBtn href={url} target='_blank'>{text}</StyledBtn>
  )
}