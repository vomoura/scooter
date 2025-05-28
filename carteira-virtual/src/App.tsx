import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme'
import { Hero } from './components/Hero/Hero'
import { Specs } from './components/Specs/Specs'
import { DocButton } from './components/DocButton/DocButton'

const Container = styled.div`
  background: ${({ theme }) => theme.colors.card};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.shadows.card};
  max-width: 500px;
  width: 100%;
  overflow: hidden;
`

const Content = styled.div`
  padding: 24px;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 16px;
  }
`

const Title = styled.h1`
  font-weight: 600;
  font-size: 1.8rem;
  margin-bottom: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.5rem;
  }
`

export const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <Container>
      <Hero />
      <Content>
        <Specs />
        <DocButton href="https://drive.google.com/file/d/149mgLv0_AskqS3bWHQw7kzyudn5YQX5w/view?usp=drive_link">
          NFe Scooter
        </DocButton>
        <DocButton href="https://www.gov.br/transportes/pt-br/assuntos/transito/conteudo-contran/resolucoes/Resolucao9962023.pdf">
          Resolução Contran Nº 996/2023
        </DocButton>
      </Content>
    </Container>
  </ThemeProvider>
)

export default App