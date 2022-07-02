import {Center, Box, Heading } from '@chakra-ui/react'
import React from 'react'
import Card from '../fragment/Card'

export default function MiddleSection() {
  return (
    <Box bg={"white"} w={"100%"} h={"50%"} my={'30px'}>
        <Center>
          <Box w={"90%"} >
              <Heading my={'20px'}>Kategori</Heading>
              <Card/>
          </Box>
        </Center>
    </Box>
  )
}
