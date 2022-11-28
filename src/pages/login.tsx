import type { NextPage } from 'next'
import MainTemplate from '@/components/templates/MainTemplate'
import LoginForm from '@/components/organisms/LoginForm'
import { Flex } from '@chakra-ui/react'

const Login: NextPage = () => {
  return (
    <MainTemplate>
      <Flex justifyContent={'center'} alignItems={'center'} h={'50vh'}>
        <LoginForm />
      </Flex>
    </MainTemplate>
  )
}

export default Login
