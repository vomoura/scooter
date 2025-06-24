import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin: 16px 0;
`

const Value = styled.div`
  font-size: 2rem;
  font-weight: 600;
`

interface OdometerProps {
  totalKm: number
}

export const Odometer: React.FC<OdometerProps> = ({ totalKm }) => (
  <Wrapper>
    <Value>{totalKm.toFixed(2)} km</Value>
  </Wrapper>
)

export default Odometer

