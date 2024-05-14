import { Wrapper } from '@googlemaps/react-wrapper'
import { cloneElement, useEffect, useRef, useState } from 'react'

//
export const LocaleMapMark = (): JSX.Element => {
  const apiKey = import.meta.env.VITE_KEY_API_MAP
  const [zoom] = useState(19) // initial zoom
  const [center] = useState<google.maps.LatLngLiteral>({
    lat: 4.746007084810314,
    lng: -75.92184339697799
  })

  const position = {
    lat: 4.74610, lng: -75.92197
  }
  return (
    <Wrapper apiKey={apiKey}>
      <Map center={center} zoom={zoom}>
        <Marker position={position}/>
      </Map>
    </Wrapper>
  )
}

const Map = ({ style, center, zoom, children }: { style?: string, center: google.maps.LatLngLiteral, zoom: number, children: JSX.Element }): JSX.Element => {
  const ref = useRef<HTMLDivElement>(null)
  const [map, setMap] = useState<google.maps.Map>()

  useEffect(() => {
    if ((ref.current != null) && (map == null)) {
      setMap(new window.google.maps.Map(ref.current, {
        center,
        zoom
      }))
    }
  }, [ref, map])

  return (
    <>
    <div ref={ref} style={{ width: '100%', height: '70%' }}/>
    {cloneElement(children, { map })}
    </>

  )
}

const Marker: React.FC<google.maps.MarkerOptions> = (options) => {
  const [marker, setMarker] = useState<google.maps.Marker>()

  useEffect(() => {
    if (marker == null) {
      setMarker(new google.maps.Marker())
    }

    // remove marker from map on unmount
    return () => {
      if (marker != null) {
        marker.setMap(null)
      }
    }
  }, [marker])

  useEffect(() => {
    if (marker != null) {
      marker.setOptions(options)
    }
  }, [marker, options])

  return null
}
