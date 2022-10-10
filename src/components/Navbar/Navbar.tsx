/* eslint-disable no-console */
import { LogoIcon } from "@assets/icons/Logo"
import { Drawer,
  DrawerBody,
  DrawerContent,
  useDisclosure,
  Button,
  Box,
  Link,
  Container } from "@chakra-ui/react"
import React, { ReactNode } from "react"
import { motion } from "framer-motion"
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons"
import { useRouter } from "next/router"

const Links = [

  {
    name: "Map",
    href: "/map",
  },
  {
    name: "Devices",
    href: "/devices",
  },
]

const NavLink = ({ children, href }: { children: ReactNode, href: string }) => (

  <Link
    href={href} _hover={{ textDecoration: "none", color: "blue.light" }} fontSize="2rem" fontWeight="600">
    {children}
  </Link >

)

export function Navbar () {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return (
      <Box as={motion.div} display="flex" flexDirection="row" justifyContent="flex-end" >
      <Button onClick={onOpen} variant="burger" position="absolute" top="3rem" zIndex="999" transition=".10s linear" right={isOpen ? "15rem" : "4rem"} opacity={isOpen ? "0%" : "100%"} >
        <HamburgerIcon/>
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerContent>
          <Box>
            <Button
              variant={"close"}
              onClick={onClose}
              position="absolute"
              top="3rem"
              right="4rem"
              opacity={isOpen ? "100%" : "0%"}>
            <CloseIcon/>
          </Button>
          </Box>

          <DrawerBody backgroundColor="black" pt="8rem" textAlign="left">
            <LogoIcon width={"15rem"} height={"15rem"}/>
            {Links.map((link, i) => (
                <Container key={i} color={"white"} borderBottom={"1px"} _hover={{ color: "blue.light" }} borderColor="white">
                  <NavLink href={link.href} key={i}>{link.name}</NavLink>
                </Container>
            ))}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  )
}
