import type { NextPage } from 'next'
import { Flex, Heading } from '@chakra-ui/react'
import MainTemplate from '@/components/templates/MainTemplate'
import MainHero from '@/components/organisms/MainHero'

const Home: NextPage = () => {
  return (
    <MainTemplate>
      <Flex justifyContent={'center'} h={'100vh'}>
        <MainHero />
      </Flex>
    </MainTemplate>
  )
}

export default Home
