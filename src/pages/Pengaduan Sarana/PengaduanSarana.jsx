import React from 'react'
import {Box, Center} from '@chakra-ui/react'
import Navbar from '../../components/fragments/navbar/Navbar'
import TopSection from './section/TopSection'
import MiddleSection from './section/MiddleSection'
import BottomSection from './section/BottomSection'

export default function PengaduanSarana() {
  return (
    <Box bg={'gray.300'} minH={"100vh"}>
        <Navbar/>
        <Center>
            <Box h={"100%"} w={["80%","60%"]} bg={"blue.400"} borderRadius={["10px","20px"]} my={["50px","100px"]}>
                <TopSection/>
                <MiddleSection/>
                <BottomSection/>
            </Box>
        </Center>
    </Box>
  )
}
