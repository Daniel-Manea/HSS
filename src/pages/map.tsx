import { Map } from "@components/Map"
import type { NextPage } from "next"
import { Navbar } from "@components/Navbar"

const MapPage: NextPage = () => {
  return (
  <>
    <Navbar />
    <Map />
  </>
  )
}

export default MapPage
