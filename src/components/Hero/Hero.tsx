import React from 'react'
import { HeroWrapper } from './Hero.styles'
import scooter from '../../scooter.JPG'

export const Hero: React.FC = () => (
  <HeroWrapper>
    <img src={scooter} alt="Scooter" />
  </HeroWrapper>
)
