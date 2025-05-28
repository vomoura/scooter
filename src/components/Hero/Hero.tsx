import React from 'react'
import { HeroWrapper } from './Hero.styles'
import scooter from '../../assets/scooter.png'

export const Hero: React.FC = () => (
  <HeroWrapper>
    <img src={scooter} alt="Scooter" />
  </HeroWrapper>
)