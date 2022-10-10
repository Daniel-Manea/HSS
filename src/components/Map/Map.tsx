/* eslint-disable no-lone-blocks */
/* eslint-disable camelcase */
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import Database from "../../database/Data.json"
import * as L from "leaflet"
import { DevicePopup } from "./DevicePopup"
import SirenIcon from "@assets/icons/Siren.png"

const Map = () => {
  const sirenIcon = new L.Icon({
    iconUrl: SirenIcon.src,
    iconRetinaUrl: SirenIcon.src,
    popupAnchor: [0, 0],
    iconSize: [20, 20],
  })

  return (
    <>
      <MapContainer center={[56.2639, 9.5018]} minZoom={3} zoom={8} scrollWheelZoom={true} style={{ height: "100vh" }} >
        <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {Database.$values.map((region) => {
          const { regionDeviceList } = region
          return regionDeviceList.$values.map((device) => {
            return (
            <Marker key={device.dId} position={[device.location.y, device.location.x]} icon={sirenIcon}>
              <Popup>
              { DevicePopup(device) }
              </Popup>

            </Marker>
            )
          })
        })}
      </MapContainer >
    </>

  )
}

export default Map
