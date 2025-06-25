import React from 'react'
import { StyledButton } from './Button.styles'

interface ButtonProps {
  href: string
  children: React.ReactNode
}

export const Button: React.FC<ButtonProps> = ({ href, children }) => {
  const handleClick = () => {
    window.open(href, '_blank', 'noopener,noreferrer')
  }

  return (
    <StyledButton onClick={handleClick} type="button">
      {children}
    </StyledButton>
  )
}
