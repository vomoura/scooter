import React, { useState } from 'react'

interface Coords {
  lat: number
  lng: number
}

interface TripRecorderProps {
  onDistance: (km: number) => void
}

export const TripRecorder: React.FC<TripRecorderProps> = ({ onDistance }) => {
  const [start, setStart] = useState<Coords | null>(null)

  const getCurrentPosition = (): Promise<Coords> => {
    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        reject(new Error('Geolocation not supported'))
        return
      }
      navigator.geolocation.getCurrentPosition(
        (pos) =>
          resolve({ lat: pos.coords.latitude, lng: pos.coords.longitude }),
        (err) => reject(err)
      )
    })
  }

  const startTrip = async () => {
    try {
      const coords = await getCurrentPosition()
      setStart(coords)
    } catch (err) {
      console.error(err)
    }
  }

  const endTrip = async () => {
    if (!start) return
    try {
      const end = await getCurrentPosition()
      const distance = await fetchDistance(start, end)
      onDistance(distance)
      setStart(null)
    } catch (err) {
      console.error(err)
    }
  }

  const fetchDistance = async (orig: Coords, dest: Coords): Promise<number> => {
    const key = import.meta.env.VITE_GOOGLE_MAPS_API_KEY
    if (!key) throw new Error('Google Maps API key missing')
    const url =
      `https://maps.googleapis.com/maps/api/directions/json?origin=${orig.lat},${orig.lng}` +
      `&destination=${dest.lat},${dest.lng}&key=${key}`
    const res = await fetch(url)
    const data = await res.json()
    const meters =
      data.routes?.[0]?.legs?.[0]?.distance?.value ?? 0
    return meters / 1000
  }

  return (
    <div>
      <button onClick={startTrip} disabled={!!start}>
        Start Trip
      </button>
      <button onClick={endTrip} disabled={!start}>
        End Trip
      </button>
    </div>
  )
}

export default TripRecorder

