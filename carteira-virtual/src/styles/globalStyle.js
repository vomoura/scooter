// src/styles/GlobalStyle.ts
import { createGlobalStyle } from 'styled-components';
export const GlobalStyle = createGlobalStyle `
  /* 1) importa a fonte do Google */
  @import url('https://fonts.googleapis.com/css2?family=Public+Sans:wght@300;400;600;700&display=swap');

  /* 2) reset básico */
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  /* 3) estilos globais */
  body {
    font-family: ${({ theme }) => theme.fonts.primary};
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    display: flex;
    align-items: flex-start;
    justify-content: center;
    min-height: 100vh;
    padding: 20px;
  }
`;
