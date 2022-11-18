import type { NextPage } from 'next'
import { Flex, Heading } from '@chakra-ui/react'
import MainTemplate from '@/components/templates/MainTemplate'

const Home: NextPage = () => {
  return (
    <MainTemplate>
      <Flex justifyContent={'center'} alignItems={'center'} h={'100vh'}>
        <Heading>메인</Heading>
      </Flex>
    </MainTemplate>
  )
}

export default Home
