import type { NextPage } from 'next'
import { Flex, Heading } from '@chakra-ui/react'

const Home: NextPage = () => {
  return (
    <Flex justifyContent={'center'} alignItems={'center'} h={'100vh'}>
      <Heading>메인</Heading>
    </Flex>
  )
}

export default Home
