import { Button, Flex, Heading, VStack } from '@chakra-ui/react'
import { RiKakaoTalkFill, RiGoogleFill } from 'react-icons/ri'
import { SiNaver } from 'react-icons/si'

const LoginForm = () => {
  return (
    <VStack direction={'column'} spacing={5}>
      <Heading mb={10}>오늘 하루도 반가워요</Heading>
      <Button colorScheme={'yellow'} size={'lg'} py={8} w={300} leftIcon={<RiKakaoTalkFill size={48} />}>
        카카오로 시작하기
      </Button>
      <Button colorScheme={'green'} size={'lg'} w={300} py={8} leftIcon={<SiNaver size={42} />}>
        네이버로 시작하기
      </Button>
      <Button size={'lg'} w={300} pe={10} py={8} leftIcon={<RiGoogleFill size={48} />}>
        구글로 시작하기
      </Button>
    </VStack>
  )
}

export default LoginForm
