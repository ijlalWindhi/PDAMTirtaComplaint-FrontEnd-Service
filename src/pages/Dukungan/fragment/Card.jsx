import React from 'react'
import IconSarana from '../../../assets/image/icon-sarana.svg'
import IconPembayaran from '../../../assets/image/icon-pembayaran.svg'
import IconPelayanan from '../../../assets/image/icon-pelayanan.svg'
import { Box, Text, Grid, GridItem, Image } from '@chakra-ui/react'

const data = ['pembayaran', 'sarana', 'pelayanan']

export default function Card() {
  return (
    <Box>
        <Grid
        gap={4}
        templateColumns={{ md:"repeat(3, 1fr)"}}
        justifyContent="center">
        {data.map((item, index) => {
            return(
                <GridItem key={index}>
                    <Image src={IconPembayaran} width={['50%','60%']} padding={'5px'} bg={'gray.200'} borderRadius={'20px'} mx={'auto'}/>
                    <Text align={'center'} fontSize={"lg"} my={2}>{item}</Text>
                </GridItem>
            )
        })}
        </Grid>
    </Box>
  )
}
