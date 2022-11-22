import { Button, Flex, HStack, useColorModeValue, Wrap, WrapItem } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import SearchInput from '@/components/molecules/SearchInput'
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
        <Flex direction={'row'} justifyContent={'center'} alignItems={'center'} gap={5}>
          <Wrap display={'flex'} flexDirection={'row'} alignItems={'center'} spacing={5}>
            <WrapItem>
              <Link href={'/login'}>로그인</Link>
            </WrapItem>
            <WrapItem>
              <Link href={'/login'}>회원가입</Link>
            </WrapItem>
          </Wrap>
          <ThemeToggleButton />
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Header
