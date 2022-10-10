import { ChakraProvider } from "@chakra-ui/provider"
import type { AppProps } from "next/app"

import { Layout } from "../partials/Layout"
import { theme } from "../theme/theme"

function MyApp ({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme} cssVarsRoot={undefined}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}

export default MyApp
