import React from 'react'
import { Box, Container, Flex } from '@chakra-ui/react'
import Header from '@/components/organisms/Header'
import SubHeader from '@/components/organisms/SubHeader'
import Footer from '@/components/organisms/Footer'

const MainTemplate = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box minW={'320px'} maxW={'full'} h={'full'}>
      <Container maxW={'container.xl'}>
        <Flex direction={'column'} w={'full'} gap={19}>
          <Header />
          <SubHeader />
        </Flex>
      </Container>
      {children}
      <Footer />
    </Box>
  )
}

export default MainTemplate
