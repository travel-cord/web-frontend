import { Flex, HStack } from '@chakra-ui/react'
import Image from 'next/image'

const Header = () => {
  return (
    <Flex as={'header'} direction={'column'}>
      <HStack direction={'row'} justifyContent={'space-between'}>
        <Image src={'/logo.png'} alt={'logo'} width={128} height={128} />
      </HStack>
    </Flex>
  )
}

export default Header
