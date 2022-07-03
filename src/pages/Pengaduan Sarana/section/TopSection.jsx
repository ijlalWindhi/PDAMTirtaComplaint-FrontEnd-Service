import React from 'react'
import {Heading, Center, Box, Flex} from '@chakra-ui/react'
import {IoIosArrowBack} from 'react-icons/io'
import {Link} from 'react-router-dom'

export default function TopSection() {
  return (
    <Center>
        <Box w={"90%"}>
            <Flex>
                <Link to="/dukungan">
                    <Box mt={["15px","30px"]} mr={[2,5]}>
                        <IoIosArrowBack size={['50px']} color={'white'}/>
                    </Box>
                </Link>
                <Heading textColor={"white"} mt={["15px","30px"]} textAlign={{base:'center', lg:'left'}}>Pengaduan Sarana</Heading>
            </Flex>
        </Box>
    </Center>
  )
}
