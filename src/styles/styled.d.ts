// src/styles/styled.d.ts
import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string
      hover: string
      background: string
      card: string
      text: string
    }
    borderRadius: string
    shadows: {
      card: string
    }
    breakpoints: {
      mobile: string
    }
    // declaramos o novo campo
    fonts: {
      primary: string
    }
  }
}
