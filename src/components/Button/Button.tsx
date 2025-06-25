import React from 'react'
import { StyledButton } from './Button.styles'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string
}

export const Button: React.FC<ButtonProps> = ({
  href,
  children,
  onClick,
  ...rest 
}) => {
  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    if (onClick) {
      onClick(e)
    }
    if (href) {
      window.open(href, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <StyledButton
      onClick={handleClick}
      type={rest.type || 'button'}
      {...rest}
    >
      {children}
    </StyledButton>
  )
}
