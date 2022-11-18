import React from 'react'
import { Container } from '@chakra-ui/react'
import Header from '@/components/organisms/Header'

const MainTemplate = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container minW={'320px'} maxW={'full'} h={'full'}>
      <Header />
      {children}
    </Container>
  )
}

export default MainTemplate
