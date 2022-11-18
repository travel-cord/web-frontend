import { Box, Button, Flex } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import SearchInput from '@/components/Molecules/SearchInput'
import ThemeToggleButton from '@/components/atoms/ThemeToggleButton'

const Header = () => {
  return (
    <Flex as={'header'} direction={'column'} p={3}>
      <Flex direction={'row'} justifyContent={'space-between'}>
        <Flex>
          <Link href={'/'} passHref>
            <Image src={'/logo.png'} alt={'logo'} width={64} height={64} />
          </Link>
          <Box p={4}>
            <SearchInput />
          </Box>
        </Flex>
        <Flex justifyContent={'center'} alignItems={'center'} direction={'row'}>
          <ThemeToggleButton />
          <Link href={'/login'}>
            <Button rounded={'2xl'} ms={6}>
              로그인
            </Button>
          </Link>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Header
