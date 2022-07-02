import {Box} from '@chakra-ui/react'
import {RiCustomerService2Fill} from 'react-icons/ri'
import Navbar from '../../components/fragments/navbar/Navbar'

export default function Beranda() {
  return (
    <Box>
        <Navbar/>
        <Box position={'fixed'}
            bottom={[5,20]}
            right={[5,20]}
            cursor={'pointer'}
            bg={'#fff'}
            borderRadius={'50%'}
            boxShadow={'0 0 10px rgba(0,0,0,0.1)'}
            p={[2,4]}
        >
            <RiCustomerService2Fill size={50} color={"blue"}/>
        </Box>
    </Box>
  )
}
