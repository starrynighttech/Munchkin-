import { useEffect, useState } from "react"

export default function TrackingPage() {
  const [map, setMap] = useState(null)
  const [marker, setMarker] = useState(null)

  useEffect(() => {
    const googleMap = new google.maps.Map(
      document.getElementById("map"),
      {
        center: { lat: -17.8292, lng: 31.0522 },
        zoom: 12
      }
    )

    const courierMarker = new google.maps.Marker({
      position: { lat: -17.8292, lng: 31.0522 },
      map: googleMap
    })

    setMap(googleMap)
    setMarker(courierMarker)

  }, [])

  return (
    <div>
      <h1>Live Delivery Tracking</h1>

      <div
        id="map"
        style={{ width: "100%", height: "500px", borderRadius: "12px" }}
      />
    </div>
  )
}
