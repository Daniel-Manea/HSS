const themeColors = {
  black: "#000000",
  white: "#ffffff",
  purple: "#7E0ECF",
  yellow: "#FFBF00",
  gray: {
    900: "#070808",
    800: "#1e2023",
    700: "#34393d",
    600: "#4b5157",
    500: "#616a72",
    400: "#78828c",
    300: "#939ba2",
    200: "#adb3b9",
    100: "#c8cccf",
    50: "#e2e4e6",
  },
  blue: { normal: "#28249B", light: "#00ade7" },
  red: "red",
}

export const colors = {
  // Theme Colors
  ...themeColors,

  // Named colors
  error: themeColors.red,
  info: themeColors.gray["600"],

  gradients: {
    main: {
      fallback: "#7d0ecf",
      gradient: "linear-gradient(45deg, #7d0ecf 15%, #09aeff 80%)",
    },
  },
}
