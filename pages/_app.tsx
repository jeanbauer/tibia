import { ChakraProvider, defaultSystem } from '@chakra-ui/react'
import type { AppProps } from 'next/app'

import { Toaster } from '../components/ui/toaster'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider value={defaultSystem}>
      <Component {...pageProps} />
      <Toaster />
    </ChakraProvider>
  )
}

export default MyApp
