import React from 'react'
import {Box, Center} from '@chakra-ui/react'
import Navbar from '../../components/fragments/navbar/Navbar'
import TopSection from './section/TopSection'
import MiddleSection from './section/MiddleSection'

export default function Dukungan() {
  return (
      <>
        <Box bg={'gray.300'} minH={"100vh"}>
            <Navbar/>
            <Center>
                <Box minH={"100vh"} w={["80%","60%"]} bg={"blue.400"} borderRadius={["10px","20px"]} my={["50px","100px"]}>
                    <TopSection/>
                    <MiddleSection/>
                </Box>
            </Center>
        </Box>
      </>
    
  )
}
