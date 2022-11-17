import { extendTheme, ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
  useSystemColorMode: false,
  initialColorMode: 'dark'
}

export const chakraTheme = extendTheme({ config })
