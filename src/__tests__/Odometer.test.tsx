import { render, screen } from '@testing-library/react'
import React from 'react'
import Odometer from '../components/Odometer/Odometer'

describe('Odometer', () => {
  it('displays the provided kilometers', () => {
    render(<Odometer totalKm={123.456} />)
    expect(screen.getByText('123.46 km')).toBeInTheDocument()
  })
})
