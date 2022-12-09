import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Heading,
  Text,
  useColorModeValue,
  Wrap,
  WrapItem
} from '@chakra-ui/react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BiPhoneCall } from 'react-icons/bi'
import { RiInstagramFill } from 'react-icons/ri'
import { GrFacebook, GrYoutube, GrGithub } from 'react-icons/gr'

const Footer = () => {
  const logoImg = useColorModeValue('/logo-light.png', '/logo-dark.png')
  const bg = useColorModeValue('#F9FAFB', 'gray.800')

  return (
    <Box as={'footer'} mt={10} py={8} bg={bg}>
      <Container maxW={'container.xl'}>
        <Flex justifyContent={'space-between'}>
          <Flex direction={'column'}>
            <Link href={'/'} passHref>
              <Image src={logoImg} alt={'logo'} width={128} height={50} priority={true} />
            </Link>
            <Text as={'span'}>
              powered by{' '}
              <Text as={'span'} fontWeight={'700'}>
                Travel
              </Text>
            </Text>
            <Flex direction={'column'} mt={150} fontSize={'12px'} letterSpacing={'-0.25px'} lineHeight={'unset'}>
              <Text as={'span'}>대표&emsp;|&emsp;윤한빈 오세일 박정민&emsp;&emsp;서비스명&emsp;|&emsp;트레블코드</Text>
              <Text as={'span'}>
                사업자번호&emsp;|&emsp;120-87-69298&emsp;&emsp;통신판매&emsp;|&emsp;제2011-서울강남-01864&emsp;&emsp;직업정보제공&emsp;|&emsp;J1200020190003
              </Text>
              <Text as={'span'}>
                주소&emsp;|&emsp;서울시 강남구 봉은사로 112길 6, 익성빌딩 2층(삼성동)계좌번호[우리은행] 1005-501-936365,
                예금주:(주)트레블
              </Text>
              <Text as={'span'}>
                본 사이트에 게시된 전문가 및 의뢰기업 정보가 무단으로 수집되는 것을 거부합니다. © TRAVELCORD INC.
              </Text>
            </Flex>
          </Flex>
          <Flex direction={'column'}>
            <Box fontWeight={700}>
              <Link href={'/guide'}>
                이용가이드 <ChevronRightIcon />
              </Link>
            </Box>
            <Box fontWeight={'700'} mt={12}>
              <Link href={'/support'}>
                고객센터 <ChevronRightIcon />
              </Link>
            </Box>
            <Flex direction={'row'} mt={2} gap={10} fontSize={'12px'}>
              <Flex direction={'column'}>
                <Text as={'span'} fontWeight={700} fontSize={'16px'}>
                  상담시간
                </Text>
                <Text as={'span'}>평일 11:00 ~ 17:00</Text>
                <Text as={'span'}>점심 12:30 ~ 13:30</Text>
                <Text as={'span'} fontSize={'10px'}>
                  (주말, 공휴일은 제외)
                </Text>
              </Flex>
              <Flex direction={'column'}>
                <Text as={'span'} fontWeight={700} fontSize={'16px'}>
                  이메일
                </Text>
                <Text as={'span'}>help@travel.cord</Text>
              </Flex>
            </Flex>
            <Link href={'tel:1644-0000'}>
              <Button mt={10} p={10} rightIcon={<BiPhoneCall size={32} />}>
                <Heading>1644-0000</Heading>
              </Button>
            </Link>
          </Flex>
        </Flex>
        <Divider orientation="horizontal" my={10} />
        <Flex justifyContent={'space-between'} alignItems={'center'} mb={10}>
          <Wrap fontWeight={900}>
            <WrapItem>
              <Link href={'/introduce'}>회사소개</Link>
            </WrapItem>
            <WrapItem>
              <Link href={'/notice'}>공지사항</Link>
            </WrapItem>
            <WrapItem>
              <Link href={'/privacy'}>개인정보처리방침</Link>
            </WrapItem>
            <WrapItem>
              <Link href={'/terms'}>이용약관</Link>
            </WrapItem>
            <WrapItem>
              <Link href={'/licenses'}>라이선스</Link>
            </WrapItem>
          </Wrap>
          <Wrap spacing={10}>
            <WrapItem>
              <Link href={'https://www.instagram.com'}>
                <RiInstagramFill size={32} />
              </Link>
            </WrapItem>
            <WrapItem>
              <Link href={'https://www.facebook.com'}>
                <GrFacebook size={32} />
              </Link>
            </WrapItem>
            <WrapItem>
              <Link href={'https://www.youtube.com'}>
                <GrYoutube size={32} />
              </Link>
            </WrapItem>
            <WrapItem>
              <Link href={'https://github.com/travel-cord'}>
                <GrGithub size={32} />
              </Link>
            </WrapItem>
          </Wrap>
        </Flex>
      </Container>
    </Box>
  )
}

export default Footer
