import React from 'react'
import {BiSearchAlt} from 'react-icons/bi'
import {AiOutlineClose} from 'react-icons/ai'
import {Heading, Input, InputGroup, InputLeftElement, InputRightElement, IconButton, Center, Box} from '@chakra-ui/react'

export default function TopSection() {
  return (
    <Center>
        <Box w={"90%"}>
            <Heading textColor={"white"} my={["15px","30px"]}>Pusat Pengaduan</Heading>
            <InputGroup>
                <InputLeftElement>
                    <IconButton
                    borderRadius="full"
                    size="lg"
                    variant="ghost"
                    aria-label={'whod hide'}
                    icon={<BiSearchAlt color="blue" />}
                    my={'auto'}
                    />
                </InputLeftElement>
                <Input 
                    type={'text'}
                    name="input"
                    id="input"
                    bg={'white'}
                    h={'50px'}
                    borderRadius={'10px'}
                    placeholder={"Cari Bantuan..."}
                />
                <InputRightElement>
                    <IconButton
                    borderRadius="full"
                    size="lg"
                    variant="ghost"
                    aria-label={'whod hide'}
                    icon={<AiOutlineClose color='blue' />}
                    my={"auto"}
                    />
                </InputRightElement>
            </InputGroup>
        </Box>
    </Center>
  )
}
