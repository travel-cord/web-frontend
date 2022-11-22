import { Card, Flex } from '@chakra-ui/react'
import SearchTravelDateBox from '@/components/molecules/SearchTravelDateBox'

// TODO : 리팩토링을 요함
const MainHero = () => {
  return (
    <Flex position={'relative'}>
      <Card w={'1220px'} h={'320px'} mt={10} bgImage={'/덕수궁야경투어.jpg'} bgPosition={'contain'}></Card>
      <SearchTravelDateBox />
    </Flex>
  )
}

export default MainHero
