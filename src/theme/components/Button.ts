// https://chakra-ui.com/docs/styled-system/theming/component-style#styling-single-part-components

import type { SystemStyleObject } from "@chakra-ui/theme-tools"

export const Button: SystemStyleObject = {
  // style object for base or default style
  baseStyle: {
    fontSize: "h4",
    borderRadius: "button",
  },
  // styles for different sizes ("sm", "md", "lg")
  sizes: {},
  // styles for different visual variants ("outline", "solid")
  variants: {
    normal: {
      fontSize: "h5",
      fontWeight: "200",
      borderRadius: "0",
      _hover: { color: "blue.light", transform: "scale(1.05)" },
    },
    burger: {
      borderRadius: "100%",
      color: "white",
      bg: "black",
      height: "2.5rem",
      width: "2.5rem",
      _hover: { transform: "scale(1.2)" },
    },
    close: {
      borderRadius: "100%",
      color: "black",
      bg: "white",
      height: "2.5rem",
      width: "2.5rem",
      _hover: { transform: "scale(1.2)" },
    },
    status: {
      fontSize: "h5",
      fontWeight: "700",
      borderRadius: "0",
      width: "inherit",
      bg: "gray.800",
      color: "white",
      padding: ".4rem 2rem",
      _hover: { transform: "scale(1.05)" },
    },
    save: {
      fontSize: "h5",
      fontWeight: "700",
      borderRadius: "0",
      width: "inherit",
      bg: "blue.light",
      color: "white",
      padding: ".4rem 2rem",
      _hover: { transform: "scale(1.05)" },
    },
    cancel: {
      fontSize: "h5",
      fontWeight: "700",
      borderRadius: "0",
      width: "inherit",
      bg: "gray",
      color: "white",
      padding: ".4rem 2rem",
      _hover: { transform: "scale(1.05)" },
    },
    filters: {
      fontSize: "h5",
      fontWeight: "700",
      borderRadius: "0",
      width: "inherit",
      bg: "gray",
      color: "white",
      padding: ".6rem 3rem",
      _hover: { bg: "gray.500" },
    },
    lightBlue: {
      fontSize: "h5",
      fontWeight: "700",
      borderRadius: "0",
      width: "inherit",
      bg: "blue.light",
      color: "white",
      padding: ".6rem 3rem",
      _hover: { transform: "scale(1.05)" },
    },
    sirens: {
      fontSize: "h5",
      fontWeight: "700",
      borderRadius: "0",
      width: "inherit",
      bg: "blue.light",
      color: "white",
      padding: ".6rem 3rem",
    },
    CC: {
      fontSize: "h5",
      fontWeight: "700",
      borderRadius: "0",
      width: "inherit",
      bg: "gray.500",
      color: "white",
      padding: ".6rem 3rem",
    },
  },
  // default values for 'size', 'variant' and 'colorScheme'
  defaultProps: {
    size: "",
    variant: "",
    colorScheme: "",
  },
}
