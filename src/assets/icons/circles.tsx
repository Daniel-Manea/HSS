import { Icon, IconProps, OmitCommonProps } from "@chakra-ui/react"
import { SVGProps } from "react"

const redCircle = () => {
  const color = "red"

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

const yellowCircle = () => {
  const color = "yellow"

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

const greenCircle = () => {
  const color = "green"

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

export {
  redCircle, yellowCircle, greenCircle,
}
