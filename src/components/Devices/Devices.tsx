/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable react-hooks/rules-of-hooks */
import { Box,
  Flex,
  Text,
  Button,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Portal,
  Divider } from "@chakra-ui/react"
import Database from "@database/Data.json"
import { DeviceTables } from "./DeviceTables"
import { FilterDevices } from "./DeviceFilter"
import { useState } from "react"

import { redCircle, yellowCircle, greenCircle } from "@assets/icons/circles"

export function Devices () {
  const [filter, setFilter] = useState("Select all")

  const ApplyFilter = (filterName: "Active" | "Partial" | "Off" | "Select all") => {
    setFilter(filterName)
  }

  return (
    <Box bg={"white"} px={4} margin="2.5rem 10rem">
      <Box height={"60rem"} bg={"white"}>
        <Flex h={"3.5rem"} px={5} alignItems={"center"} justifyContent={"space-between"} bg="black" marginBottom="2rem">
          <HStack alignItems={"center"}>
            <Box paddingRight={"10rem"}>Devices</Box>
            <Menu>
              <MenuButton
                as={Button}
                variant={"filters"}
                cursor={"pointer"}
              >
                Filter
              </MenuButton>
              <Portal>
                <MenuList onClick={(e) => ApplyFilter(e.target.innerText)} bg="white" color="black" borderRadius={"0"}>
                  <MenuItem _hover={{ bg: "gray.200" }}>{greenCircle()}Active</MenuItem>
                  <MenuItem _hover={{ bg: "gray.200" }}>{yellowCircle()}Partial</MenuItem>
                  <MenuItem _hover={{ bg: "gray.200" }}>{redCircle()}Off</MenuItem>
                  <MenuItem _hover={{ bg: "gray.200" }}>Select all</MenuItem>
                </MenuList>
              </Portal>
            </Menu>
          </HStack>
          <Flex alignItems={"center"}>
            <Menu>
              <MenuButton
                as={Button}
                variant={"lightBlue"}
                cursor={"pointer"}
              >
                Add new device
              </MenuButton>
            </Menu>
          </Flex>
        </Flex>
        <Box bg="white">
          <Divider borderColor={"black"} />
        </Box>
        <Box display={"flex"}>
          <SidebarContent />
          <Box bg="white" position="relative" height={"40rem"} marginTop="1rem" marginLeft="2rem" minW={"0rem"} width="100%">
          {filter === "Select all" ? DeviceTables(Database) : FilterDevices(Database, filter)}
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

const SidebarContent = () => {
  return (
    <Box
      marginTop={"1rem"}
      bg={"white"}
      borderRight="1px"
      borderRightColor={"black"}
      pos="relative"
      h="100rem"
      w={"12.5rem"}
    >
      <Button as={Text} variant={"sirens"} height="2rem" width={"95%"} margin="0">
        Sirens
      </Button>
      <Box padding={".5em 0rem"} display={"flex"} justifyContent="space-evenly" width={"95%"} >
        <Box display={"flex"} gap=".5rem">
          <Text margin={"0rem"} borderRadius="100%" border="1px solid red" boxSize={6} color='red' padding="0rem .45rem" fontSize=".9rem">2</Text>
          <Text margin={"0rem"} fontSize=".9rem" color={"red"}>Off</Text>
        </Box>
        <Box display={"flex"} gap=".5rem">
          <Text margin={"0rem"} borderRadius="100%" border="1px solid" borderColor={"yellow"} boxSize={6} color='yellow' padding="0rem .45rem" fontSize=".9rem">2</Text>
          <Text margin={"0rem"} fontSize=".9rem" color={"yellow"}>Partial</Text>
        </Box>
      </Box>
      <Button as={Text} variant={"CC"} height="2rem" width={"95%"} margin="0">
        Control Centers
      </Button>
      <Box padding={".5em 0rem"} display={"flex"} justifyContent="space-evenly" width={"95%"} >
        <Box display={"flex"} gap=".5rem">
          <Text margin={"0rem"} borderRadius="100%" border="1px solid gray" boxSize={6} color='gray' padding="0rem .45rem" fontSize=".9rem">2</Text>
          <Text margin={"0rem"} fontSize=".9rem" color={"gray"}>Off</Text>
        </Box>
        <Box display={"flex"} gap=".5rem" visibility={"hidden"}>
          <Text margin={"0rem"} borderRadius="100%" border="1px solid blue" boxSize={6} color='blue' padding="0rem .45rem" fontSize=".9rem">2</Text>
          <Text margin={"0rem"} fontSize=".9rem" color={"blue"}>Partial</Text>
        </Box>
      </Box>
    </Box>
  )
}
