/* eslint-disable react-hooks/rules-of-hooks */
import { ChevronRightIcon, ChevronDownIcon } from "@chakra-ui/icons"
import { Button, TableContainer, Table, Thead, Tr, Th, OmitCommonProps, IconProps, Tbody, Td, Container, Text, Icon, Box } from "@chakra-ui/react"
import { useState, SVGProps } from "react"

export const DeviceTables = (Database : {
  $values: {
    regionDeviceList: {
      $values: {
        status: string
        dId: string
        name: string
        type: string
        region: string
        flags: string
      }[]
    }
  }[]
}) => {
  const GreenRegionDeviceList = Database.$values[0].regionDeviceList.$values

  const BlueRegionDeviceList = Database.$values[1].regionDeviceList.$values

  const [show, setShow] = useState(true)
  const [showIcon, setShowIcon] = useState(<ChevronDownIcon />)

  const handleToggle = () => {
    setShow(!show)
    show ? setShowIcon(<ChevronRightIcon />) : setShowIcon(<ChevronDownIcon />)
  }

  return (
    <>
      <Box display={"flex"} bg="black" marginTop="0rem" marginLeft="-1.3rem" verticalAlign={"centre"}>
        <Button bg={"white"} borderRadius="0" onClick={() => handleToggle() } color="black" id="top">{showIcon}</Button>
        <Text p={".1rem"} px={4} mb="0">Green Region</Text>
      </Box>

      <TableContainer display={show ? "block" : "none"}>
        <Table variant='simple' color={"black"}>
          <Thead>
            <Tr>
              <Th>Status</Th>
              <Th>ID</Th>
              <Th>Name</Th>
              <Th>Type</Th>
              <Th>Flags</Th>
            </Tr>
          </Thead>
          {GreenRegionDeviceList.map((device) => {
            let deviceType
            if (device.name.startsWith("SIR")) {
              deviceType = "Siren"
            } else {
              deviceType = "CC"
            }

            const StatusCircle = () => {
              const status = device.status

              const color = status === "Normal" ? "green" : status === "Partial" ? "yellow" : "red"

              const CircleIcon = (props: JSX.IntrinsicAttributes & OmitCommonProps<SVGProps<SVGSVGElement>, keyof IconProps> & IconProps & { as?: "svg" | undefined }) => (
                <Icon viewBox='0 0 200 200' {...props}>
                  <path
                    fill='currentColor'
                    d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'
                  />
                </Icon>
              )
              return (
                <CircleIcon boxSize={7} color={color} />
              )
            }

            const flagColors = () => {
              const flags = Object.entries(device).filter(([key]) => key.includes("Flag"))
              return flags.map(([key, value]) => {
                const color = value ? "green" : "red"
                return (
                  <Button as={Text} key={key} borderRadius={"0"} width={"1rem"} height={"1rem"} bg={color} margin={"0.5rem 0rem !important"} />
                )
              })
            }

            return (
              <Tbody key={device.dId}>
                <Tr>
                  <Td color={"black"}>{StatusCircle()}</Td>
                  <Td color={"black"}>{device.dId}</Td>
                  <Td color={"black"}>{device.name}</Td>
                  <Td color={"black"}>{deviceType}</Td>
                  <Td>
                    <Container display={"grid"} padding={0} gridTemplateColumns={"repeat(5, 2rem)"}>
                      {flagColors()}
                    </Container>
                  </Td>

                </Tr>
              </Tbody>

            )
          })}
        </Table>
      </TableContainer>

      <Box display={"flex"} bg="black" marginTop="1.5rem" marginLeft="-1.3rem" verticalAlign={"centre"}>
        <Button bg={"white"} borderRadius="0" onClick={() => handleToggle()} color="black" id="bottom">{showIcon}</Button>
        <Text p={".1rem"} px={4} mb="0">Blue Region</Text>
      </Box>

      <TableContainer display={show ? "block" : "none"}>
        <Table variant='simple' color={"black"}>
          <Thead>
            <Tr>
              <Th>Status</Th>
              <Th>ID</Th>
              <Th>Name</Th>
              <Th>Type</Th>
              <Th>Flags</Th>
            </Tr>
          </Thead>
          {BlueRegionDeviceList.map((device) => {
            let deviceType
            if (device.name.startsWith("SIR")) {
              deviceType = "Siren"
            } else {
              deviceType = "CC"
            }

            const StatusCircle = () => {
              const status = device.status

              const color = status === "Normal" ? "green" : status === "Partial" ? "yellow" : "red"

              const CircleIcon = (props: JSX.IntrinsicAttributes & OmitCommonProps<SVGProps<SVGSVGElement>, keyof IconProps> & IconProps & { as?: "svg" | undefined }) => (
                <Icon viewBox='0 0 200 200' {...props}>
                  <path
                    fill='currentColor'
                    d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'
                  />
                </Icon>
              )
              return (
                <CircleIcon boxSize={7} color={color} />
              )
            }

            const flagColors = () => {
              const flags = Object.entries(device).filter(([key]) => key.includes("Flag"))
              return flags.map(([key, value]) => {
                const color = value ? "green" : "red"
                return (
                  <Button as={Text} key={key} borderRadius={"0"} width={"1rem"} height={"1rem"} bg={color} margin={"0.5rem 0rem !important"} />
                )
              })
            }

            return (
              <Tbody key={device.dId}>
                <Tr>
                  <Td color={"black"}>{StatusCircle()}</Td>
                  <Td color={"black"}>{device.dId}</Td>
                  <Td color={"black"}>{device.name}</Td>
                  <Td color={"black"}>{deviceType}</Td>
                  <Td>
                    <Container display={"grid"} padding={0} gridTemplateColumns={"repeat(5, 2rem)"}>
                      {flagColors()}
                    </Container>
                  </Td>

                </Tr>
              </Tbody>

            )
          })}
        </Table>
      </TableContainer>
    </>
  )
}
