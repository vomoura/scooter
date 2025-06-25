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
  const [error, setError] = useState<string | null>(null)

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
      setError(null)
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err)
      setError(msg)
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
      setError(null)
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err)
      setError(msg)
      console.error(err)
    }
  }


  /**
   * Loads the Maps JavaScript API and calculates the distance between two
   * points using the client-side DirectionsService. The web service version
   * does not support CORS, so it cannot be called directly from the browser.
   */
  const fetchDistance = async (orig: Coords, dest: Coords): Promise<number> => {
    const key = import.meta.env.VITE_GOOGLE_MAPS_API_KEY
    if (!key) throw new Error('Google Maps API key missing')

    type GoogleMaps = typeof google

      const loadMaps = (): Promise<GoogleMaps> => {
        if (window.google) return Promise.resolve(window.google)
        return new Promise((resolve, reject) => {
          const callback = 'initMapsLoaded'
          ;(window as any)[callback] = () => {
            resolve(window.google)
            delete (window as any)[callback]
          }
          const script = document.createElement('script')
          script.src =
            `https://maps.googleapis.com/maps/api/js?key=${key}&libraries=routes&loading=async&callback=${callback}`
          script.async = true
          script.onerror = () => {
            delete (window as any)[callback]
            reject(new Error('Failed to load Google Maps'))
          }
          document.head.appendChild(script)
        })
      }

    const maps = await loadMaps()
    // load the routes library which provides DirectionsService
    await maps.maps.importLibrary('routes')

    const service = new maps.maps.DirectionsService()
    const { routes } = await service.route({
      origin: new maps.maps.LatLng(orig.lat, orig.lng),
      destination: new maps.maps.LatLng(dest.lat, dest.lng),
      travelMode: maps.maps.TravelMode.DRIVING,
    })
    const meters = routes?.[0]?.legs?.[0]?.distance?.value ?? 0

    return meters / 1000
  }

  return (
    <div>
      <button onClick={startTrip} disabled={!!start}>
        Iniciar
      </button>
      <button onClick={endTrip} disabled={!start}>
        Finalizar
      </button>
      {error && <p role="alert">{error}</p>}
    </div>
  )
}

export default TripRecorder

