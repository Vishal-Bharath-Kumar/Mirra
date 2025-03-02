import { useEffect, useState } from "react";
import Map, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
const InteractiveMap = () => {
    const [userLocation, setUserLocation] = useState({ lat: 51.505, lng: -0.09 });

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setUserLocation({ lat: position.coords.latitude, lng: position.coords.longitude });
          },
          () => alert("Unable to retrieve location.")
        );
      }, []);
  return (
    <>
        <Map
      initialViewState={{ latitude: userLocation.lat, longitude: userLocation.lng, zoom: 10 }}
      style={{ width: "100%", height: "500px" }}
      mapStyle="https://demotiles.maplibre.org/style.json"
    >
      <Marker latitude={userLocation.lat} longitude={userLocation.lng} color="red" />
    </Map>
    </>
  )
}

export default InteractiveMap