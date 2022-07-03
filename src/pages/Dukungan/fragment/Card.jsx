import React from 'react'
import IconSarana from '../../../assets/image/icon-sarana.svg'
import IconPembayaran from '../../../assets/image/icon-pembayaran.svg'
import IconPelayanan from '../../../assets/image/icon-pelayanan.svg'
import {Link} from 'react-router-dom'
import { Box, Text, Grid, GridItem, Image } from '@chakra-ui/react'

export default function Card() {
  return (
    <Box>
        <Grid
        gap={4}
        templateColumns={{ md:"repeat(3, 1fr)"}}
        justifyContent="center">
            <GridItem>
                <Image src={IconPembayaran} width={['50%','60%']} padding={'5px'} bg={'gray.200'} borderRadius={'20px'} mx={'auto'}/>
                <Text align={'center'} fontSize={"lg"} my={2}>Pembayaran</Text>
            </GridItem>
            <Link to="/pengaduanSarana">
                <GridItem>
                    <Image src={IconSarana} width={['50%','60%']} padding={'20px'} bg={'gray.200'} borderRadius={'20px'} mx={'auto'}/>
                    <Text align={'center'} fontSize={"lg"} my={2}>Sarana</Text>
                </GridItem>
            </Link>
            <GridItem>
                <Image src={IconPelayanan} width={['50%','60%']} padding={'20px'} bg={'gray.200'} borderRadius={'20px'} mx={'auto'}/>
                <Text align={'center'} fontSize={"lg"} my={2}>Pelayanan</Text>
            </GridItem>
        </Grid>
    </Box>
  )
}
