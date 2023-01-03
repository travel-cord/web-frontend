import { GetServerSideProps, NextPage } from 'next'
import MainTemplate from '@/components/templates/MainTemplate'
import { Flex, Heading, Spinner, VStack } from '@chakra-ui/react'
import { useAppDispatch, useAppSelector } from '@/hooks/index'
import { useEffect } from 'react'
import { kakaoLogin } from '@/redux/reducers/oauth.slice'
import { useRouter } from 'next/router'

interface Props {
  code: string
}

const Kakao: NextPage = ({ code }: Props) => {
  const router = useRouter()
  const dispatch = useAppDispatch()

  const { loading, userInfo } = useAppSelector((state) => state.oauth)

  useEffect(() => {
    dispatch(kakaoLogin(code))
    console.log(loading, userInfo)
    if (loading && userInfo) {
      router.push('/').then((r) => console.log(r))
    }
  }, [code, dispatch, loading, router, userInfo])

  return (
    <MainTemplate>
      <Flex justifyContent={'center'} alignItems={'center'} h={'50vh'}>
        <VStack direction={'column'} spacing={20}>
          <Heading>회원인지 해커인지 확인중...</Heading>
          <Spinner size="xl" />
        </VStack>
      </Flex>
    </MainTemplate>
  )
}

export async function getServerSideProps(ctx) {
  const code = ctx.query.code
  return { props: { code } }
}
export default Kakao
