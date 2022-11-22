import type { NextPage } from 'next'
import { Flex, Heading } from '@chakra-ui/react'
import MainTemplate from '@/components/templates/MainTemplate'

const Home: NextPage = () => {
  return (
    <MainTemplate>
      <Flex justifyContent={'center'} h={'100vh'}></Flex>
    </MainTemplate>
  )
}

export default Home
