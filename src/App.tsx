import React, { useState } from 'react'

import { Hero } from './components/Hero/Hero'
import { Specs } from './components/Specs/Specs'
import { Button } from './components/Button/Button'
import { Odometer } from './components/Odometer/Odometer'
import { TripRecorder } from './components/Odometer/TripRecorder'
import styled from 'styled-components'

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

export const App: React.FC = () => {
  const [totalKm, setTotalKm] = useState(0)

  const addDistance = (km: number) => setTotalKm((prev) => prev + km)

  return (

    <Container>
      <Hero />
      <Content>
        <Odometer totalKm={totalKm} />
        <TripRecorder onDistance={addDistance} />
        <Specs />
        <Button href="https://drive.google.com/file/d/149mgLv0_AskqS3bWHQw7kzyudn5YQX5w/view?usp=drive_link">
          NFe Scooter
        </Button>
        <Button href="https://www.gov.br/transportes/pt-br/assuntos/transito/conteudo-contran/resolucoes/Resolucao9962023.pdf">
          Resolução Contran Nº 996/2023
        </Button>
      </Content>
    </Container>

  )
}

export default App

