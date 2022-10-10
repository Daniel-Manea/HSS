/* eslint-disable react-hooks/rules-of-hooks */
import { Image, Button, Container, Text, Stat, StatLabel, StatNumber, Icon, IconProps, OmitCommonProps } from "@chakra-ui/react"
import loadImage from "@assets/images/imageHandler"
import Link from "next/link"
import { ExternalLinkIcon } from "@chakra-ui/icons"
import { SVGProps, useRef, useState } from "react"
export const DevicePopup = (device: {
    dId: string;
    name: string;
    status: string;
    location: {
        x: number;
        y: number;
    };
    "Flag 1": boolean;
    "Flag 2": boolean;
    "Flag 3": boolean;
    "Flag 4": boolean;
    "Flag 5": boolean;
    voltage: number;
    address: string;
    deviceTypeImg: string;
    infotime: string;
    image: string
}) => {
  const flags = Object.entries(device).filter(([key]) => key.includes("Flag"))
  const circleRef = useRef<SVGCircleElement>(null)
  // This function is used to render a flag container depending on the flag status
  function Flags () {
    return (
      flags.map(([key, value]) => {
        const flagRef = useRef() as React.MutableRefObject<HTMLDivElement>
        const color = value ? "green" : "red"
        const [flagColor, setFlagColor] = useState(color)
        const onClick = () => {
          setFlagColor(flagColor === "green" ? "red" : "green")
        }

        return (
                    <Container key={key} display={"flex"} width={"200%"} padding={"0"}>
                        <Button ref={flagRef} onClick={onClick} borderRadius={"0"} width={"1rem"} height={"1rem"} bg={flagColor} margin={"0.5rem 0rem !important"} />
                        <Text fontSize={"h5"} margin={".5rem .5rem !important"} whiteSpace={"nowrap"}>{key}</Text>
                    </Container>
        )
      })
    )
  }

  function StatusCircle () {
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
            <CircleIcon ref={circleRef} boxSize={7} color={color}/>
    )
  }

  return (
        <>
            <Container display={"flex"} padding={"0rem"} position={"absolute"} top={"0rem"} left={"0rem"}>
                <Link href={"/devices"}>
                    <Button variant={"normal"} fontSize={"h5"} fontWeight={"700"} margin={".5rem .7rem"} whiteSpace={"nowrap"}><ExternalLinkIcon width={"1.2rem"} height={"1.2rem"} margin={".5rem"} />Go to devices</Button>
                </Link>
            </Container>
            <Container p={".5rem 0rem"}>
                <Container padding={"0rem"} margin={"0rem"} width={"15rem"}>
                    <Text backgroundColor="gray.800" pl={".5rem"} fontSize="h4" fontWeight="300" color="white">{device.name}</Text>
                    <Text fontSize="h5" fontWeight="300" lineHeight={".3rem"} color="black">Location:</Text>
                    <Text fontSize="h5" fontWeight="700" lineHeight={".3rem"} color="black">{device.address}</Text>
                    <Button margin={"0"} variant={"normal"}>Insert location</Button>
                </Container>
                <Container padding={"1rem 0rem"} margin={"0rem"} width={"15rem"}>
                    <Text margin={".5rem 0rem !important"} fontSize="h5" fontWeight="300" color="black">Status:</Text>
                    {StatusCircle()}
                </Container>
                <Image src={loadImage(device.image).src} />
                <Button variant={"status"} mt={"1rem"}>Siren status</Button>
            </Container>
            <Container padding={0} display={"grid"} justifyContent={"space-between"} gridTemplateColumns={"repeat(3, 3.5rem)"} >
                {Flags()}
            </Container>
            <Container p={".5rem 0rem"} display={"grid"} gridTemplateColumns={"repeat(2, 1fr)"} gap={"1rem"}>
                <Container p={0}>
                    <Stat>
                        <StatLabel fontSize={"h5"}>Info time</StatLabel>
                        <StatNumber fontSize={"h5"} border={"1px"} paddingLeft={".2rem"}>{device.infotime}</StatNumber>
                    </Stat>
                </Container>
                <Container p={0}>
                    <Stat>
                        <StatLabel fontSize={"h5"}>Voltage</StatLabel>
                        <StatNumber fontSize={"h5"} border={"1px"} paddingLeft={".2rem"}>{device.voltage}</StatNumber>
                    </Stat>
                </Container>
            </Container>
            <Container p={".5rem 0rem"} display={"flex"} gap={".5rem"} justifyContent={"flex-end"}>
                <Button variant={"save"} width={"5rem"}>Save</Button>
                <Button variant={"cancel"} width={"5rem"}>Cancel</Button>
            </Container>

        </>

  )
}
