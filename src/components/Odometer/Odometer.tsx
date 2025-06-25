import React from 'react'
import { Value } from './Odometer.styles'

interface OdometerProps {
  totalKm: number
}

export const Odometer: React.FC<OdometerProps> = ({ totalKm }) => (
  <Value>{totalKm.toFixed(2)} km</Value>
)

export default Odometer

