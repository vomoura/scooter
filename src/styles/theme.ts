import type { DefaultTheme } from 'styled-components'

export const theme: DefaultTheme = {
  colors: {
    primary: '#e67231',
    hover: '#E65C00',
    background: '#F0F2F5',
    card: '#000000',
    text: '#F0F2F5'
  },
  borderRadius: '12px',
  shadows: {
    card: '0 4px 20px rgba(0, 0, 0, 0.1)'
  },
  breakpoints: {
    mobile: '480px'
  },
  fonts: {
    primary: "'Public Sans', sans-serif"
  }
}
