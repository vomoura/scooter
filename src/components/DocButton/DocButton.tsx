import React from 'react'
import { Button } from './DocButton.styles'

interface DocButtonProps {
  href: string
  children: React.ReactNode
}

export const DocButton: React.FC<DocButtonProps> = ({ href, children }) => {
  const handleClick = () => {
    window.open(href, '_blank', 'noopener,noreferrer')
  }

  return (
    <Button onClick={handleClick} type="button">
      {children}
    </Button>
  )
}
