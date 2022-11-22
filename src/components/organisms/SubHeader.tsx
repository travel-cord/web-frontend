import { Button, Flex, Text, Wrap, WrapItem } from '@chakra-ui/react'
import Link from 'next/link'

const SubHeader = () => {
  return (
    <Flex justifyContent={'space-between'}>
      <Wrap display={'flex'} flexDirection={'row'} alignItems={'center'} fontWeight={'900'} spacing={10}>
        <WrapItem>
          <Link href={'/login'}>전체게시글</Link>
        </WrapItem>
        <WrapItem>
          <Link href={'/login'}>담아둔 여행지</Link>
        </WrapItem>
        <WrapItem>
          <Link href={'/login'}>마이페이지</Link>
        </WrapItem>
        <WrapItem>
          <Link href={'/login'}>여행지 찾기</Link>
        </WrapItem>
      </Wrap>
      <Flex alignItems={'center'}>
        <Text as={'span'} fontWeight={'900'}>
          평균 20.9건의 여행플랜이 쏟아져요!
        </Text>
        <Button colorScheme={'messenger'} rounded={'3xl'} ms={5} fontWeight={'700'}>
          여행 플랜세우기
        </Button>
      </Flex>
    </Flex>
  )
}

export default SubHeader
