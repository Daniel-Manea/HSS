/**
 * default.theme.js
 * https://chakra-ui.com/docs/styled-system/theming/theme
 */
import { extendTheme } from "@chakra-ui/react"

// Foundational style overrides
import { colors } from "./foundations/colors"
import { typography } from "./foundations/typography"
import { radius } from "./foundations/radius"
import { styles } from "./styles"

import * as allComponents from "./components"

const overrides = {
  // Global style overrides
  styles,

  // Theming/Foundational style overrides
  colors,
  ...typography,
  ...radius,

  // Components style overwrites
  components: { ...allComponents, RadioGroup: { marginBottom: "4rem" } },

  // Config
  config: { cssVarPrefix: "my-theme" },
}

const theme = extendTheme({ ...overrides })

export {
  theme,
}
