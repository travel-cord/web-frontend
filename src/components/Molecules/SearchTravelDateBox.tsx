import { Button, HStack, Text, useColorModeValue } from '@chakra-ui/react'
import { ArrowForwardIcon, CalendarIcon } from '@chakra-ui/icons'

// TODO 스타일을 props 드릴링으로 변경 해야함 & 리팩토링을 요함
const SearchTravelDateBox = () => {
  const bg = useColorModeValue('gray.100', 'gray.900')
  return (
    <HStack
      spacing={7}
      position={'absolute'}
      top={'320px'}
      left={'335px'}
      bg={bg}
      w={'600px'}
      p={5}
      rounded={'2xl'}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <Text as={'span'}>여행일</Text>
      <CalendarIcon />
      <input type={'date'} />
      <Text as={'span'}>~</Text>
      <input type={'date'} />
      <Button>
        <ArrowForwardIcon />
      </Button>
    </HStack>
  )
}

export default SearchTravelDateBox
