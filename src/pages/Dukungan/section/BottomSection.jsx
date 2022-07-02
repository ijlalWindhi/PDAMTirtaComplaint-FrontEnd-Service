import { Center, Box, Heading, Text, Flex, Image} from '@chakra-ui/react'
import React from 'react'
import Phone from '../../../assets/image/icon-phone.svg'
import Mail from '../../../assets/image/icon-email.svg'

export default function BottomSection() {
  return (
    <Center>
        <Box w={'90%'} mb={'30px'}>
            <Heading textColor={"white"} mb={['15px','30px']} textAlign={{base:'center', lg:'left'}}>Contact Us</Heading>
            <Box>
                <Flex flexDirection={{base:'column', lg:'row'}}>
                    <Box my={'auto'} mx={{base:'auto', lg:'0'}}>
                        <Flex>
                            <Image src={Phone} w={'30px'}/>
                            <Text my={'auto'} textColor={'white'} ml={'2'}>(031) 8942886</Text>
                        </Flex>
                    </Box>
                    <Box my={'auto'} mx={{base:'auto', lg:'10'}}>
                        <Flex>
                            <Image src={Mail} w={'60px'}/>
                            <Text my={'auto'} textColor={'white'} ml={'2'}>pdamdeltatirta@yahoo.com</Text>
                        </Flex>
                    </Box>
                </Flex>
            </Box>
        </Box>
    </Center>
  )
}
