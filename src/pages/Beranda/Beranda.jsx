import {Box} from '@chakra-ui/react'
import {Link} from 'react-router-dom'
import {RiCustomerService2Fill} from 'react-icons/ri'
import "swiper/css/bundle";

import Navbar from '../../components/fragments/navbar/Navbar'
import Caraousel from '../../components/fragments/carousel/Caraousel';

export default function Beranda() {
  return (
    <Box>
        <Navbar/>
        <Caraousel/>
        <Box position={'fixed'}
            bottom={[5,20]}
            right={[5,20]}
            cursor={'pointer'}
            bg={'#fff'}
            borderRadius={'50%'}
            boxShadow={'0 0 10px rgba(0,0,0,0.1)'}
            p={[2,4]}
            zIndex={'1'}
        >
          <Link to='/dukungan/pengaduanSarana'><RiCustomerService2Fill size={50} color={"blue"}/></Link>
        </Box>
    </Box>
  )
}
