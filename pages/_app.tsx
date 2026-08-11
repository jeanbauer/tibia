import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'

import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
