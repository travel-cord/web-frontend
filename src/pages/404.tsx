import { NextPage } from 'next'
import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '@/components/organisms/Footer'

const NotFound: NextPage = () => {
  return (
    <Box minW={'320px'} maxW={'full'} h={'full'}>
      <Flex justifyContent={'center'} alignItems={'center'} h={'60vh'}>
        <Flex direction={'column'} gap={10}>
          <Flex direction={'column'} gap={2}>
            <Heading>해당 페이지를 찾을 수가 없습니다</Heading>
            <Text fontWeight={600}>주소가 잘못되었거나 더 이상 제공되지 않는 페이지 입니다.</Text>
          </Flex>
          <Flex direction={'column'} justifyContent={'center'} alignItems={'center'} gap={10}>
            <Image src={'/lost_way.jpg'} alt={'not_found'} width={800} height={300} priority={true} />
            <Link href={'/'}>
              <Button size={'lg'} w={'300px'} colorScheme={'whatsapp'}>
                메인페이지로 이동 🏠🏃‍♀️
              </Button>
            </Link>
          </Flex>
        </Flex>
      </Flex>
      <Footer />
    </Box>
  )
}

export default NotFound
