import { extendTheme, ThemeConfig } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: (props) => ({
    body: {
      bg: mode('#ffffff', '#1f2937')(props)
    }
  })
}

const config: ThemeConfig = {
  useSystemColorMode: false,
  initialColorMode: 'dark'
}

export const chakraTheme = extendTheme({ config, styles })
