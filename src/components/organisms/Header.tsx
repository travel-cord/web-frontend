import { Box, Button, Flex, HStack, useColorModeValue } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import SearchInput from '@/components/Molecules/SearchInput'
import ThemeToggleButton from '@/components/atoms/ThemeToggleButton'

const Header = () => {
  const logoImg = useColorModeValue('/logo-light.png', '/logo-dark.png')
  return (
    <Flex as={'header'} direction={'column'} p={3}>
      <Flex direction={'row'} justifyContent={'space-between'}>
        <HStack justifyContent={'center'} alignItems={'center'} spacing={10}>
          <Link href={'/'} passHref>
            <Image src={logoImg} alt={'logo'} width={128} height={50} />
          </Link>
          <SearchInput />
        </HStack>
        <Flex justifyContent={'center'} alignItems={'center'} direction={'row'}>
          <ThemeToggleButton />
          <Link href={'/login'}>
            <Button rounded={'2xl'} ms={6}>
              로그인
            </Button>
          </Link>
        </Flex>
      </Flex>
      <Flex direction={'row'} justifyContent={'space-between'} mt={10}>
        <HStack justifyContent={'center'} alignItems={'center'} spacing={3}>
          <Button>전체 게시글</Button>
          <Button>담아둔 여행지</Button>
          <Button>마이페이지</Button>
        </HStack>
        <Button colorScheme={'messenger'}>🚀 플랜 세우러 가기 ✈️ </Button>
      </Flex>
    </Flex>
  )
}

export default Header
