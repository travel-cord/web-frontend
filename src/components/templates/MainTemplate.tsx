import React from 'react'
import { Box, Container } from '@chakra-ui/react'
import Header from '@/components/organisms/Header'

const MainTemplate = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box minW={'320px'} maxW={'full'} h={'full'}>
      <Container maxW={'container.xl'}>
        <Header />
      </Container>
      {children}
    </Box>
  )
}

export default MainTemplate
