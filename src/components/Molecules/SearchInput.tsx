import { Input, InputGroup, InputRightElement, useColorModeValue } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'

const SearchInput = () => {
  const bg = useColorModeValue('#f5f6f7', '#374151')

  return (
    <InputGroup w={'370px'}>
      <Input rounded={'2xl'} bg={bg} border={'none'} placeholder={'어떤 플랜이 궁금하세요?'} />
      <InputRightElement>
        <SearchIcon />
      </InputRightElement>
    </InputGroup>
  )
}
export default SearchInput
