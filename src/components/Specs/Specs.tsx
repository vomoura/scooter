import React from 'react'
import { SpecsWrapper } from './Specs.styles'

export const Specs: React.FC = () => (
  <SpecsWrapper>
    <h2>Informações Importantes</h2>
    <ul>
      <li><strong>Equipamento Autopropelido</strong></li>
      <li>Potência do Motor: 1000 W</li>
      <li>Velocidade Máxima: 32 km/h</li>
      <li>Distância Entre Eixos: ≤ 130 cm</li>
      <li>Largura: ≤ 70 cm</li>
    </ul>
  </SpecsWrapper>
)