import { Devices } from "@components/Devices"
import type { NextPage } from "next"
import { Navbar } from "@components/Navbar"

const DevicesPage: NextPage = () => {
  return (
  <>
    <Navbar />
    <Devices />
  </>
  )
}

export default DevicesPage
