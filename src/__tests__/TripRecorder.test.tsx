import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import React from 'react'
import TripRecorder from '../components/Odometer/TripRecorder'

describe('TripRecorder', () => {
  it('starts and ends a trip calling onDistance', async () => {
    const onDistance = jest.fn()
    const getCurrentPosition = jest
      .fn()
      .mockImplementationOnce((success: any) =>
        success({ coords: { latitude: 0, longitude: 0 } })
      )
      .mockImplementationOnce((success: any) =>
        success({ coords: { latitude: 0, longitude: 1 } })
      )
    Object.defineProperty(navigator, 'geolocation', {
      value: { getCurrentPosition },
      configurable: true,
    })

    ;(window as any).google = {
      maps: {
        importLibrary: jest.fn().mockResolvedValue(undefined),
        DirectionsService: jest.fn(() => ({
          route: jest.fn().mockResolvedValue({
            routes: [
              {
                legs: [{ distance: { value: 1000 } }],
              },
            ],
          }),
        })),
        LatLng: function (lat: number, lng: number) {
          this.lat = lat
          this.lng = lng
        },
        TravelMode: { DRIVING: 'DRIVING' },
      },
    }

    ;(import.meta as any).env = { VITE_GOOGLE_MAPS_API_KEY: 'test' }

    render(<TripRecorder onDistance={onDistance} />)

    const startBtn = screen.getByRole('button', { name: /iniciar/i })
    const endBtn = screen.getByRole('button', { name: /finalizar/i })

    fireEvent.click(startBtn)
    fireEvent.click(endBtn)

    await waitFor(() => expect(onDistance).toHaveBeenCalledWith(1))
  })
})
