import {Center, Box, Heading } from '@chakra-ui/react'
import React from 'react'
// import FormSarana from '../fragment/SaranaForm'
import FormSarana from '../fragment/SaranaForm1'

export default function MiddleSection() {
  return (
    <Box bg={"white"} w={"100%"} h={"50%"} my={'30px'}>
        <Center>
          <Box w={"90%"} h={'100%'} my={{base:'20px',lg:'80px'}}>
              <FormSarana/>
          </Box>
        </Center>
    </Box>
  )
}
