import React from 'react'
import LoginForm from './fragment/LoginForm'
import { Center, Container, Grid, GridItem, Icon } from '@chakra-ui/react'
import ImageLogin from '../../assets/image/image-login.svg'

export default function Login() {
  return (
    <Container maxW="80%" gridTemplateRows="repeat(2, 1fr)" py={14} p={0}>
      <Center>
        <Grid
          gap={{base:"5",lg:'90'}}
          h="100vh"
          w="base: 100%"
          templateColumns={{ lg:"repeat(2, 1fr)"}}
          justifyContent="center"
        >
          <GridItem margin={{base:'5',lg:"auto 0"}}>
            <LoginForm />
          </GridItem>
          <GridItem margin={{base:'5',lg:"auto 0"}}>
            <Center>
              <img src={ImageLogin} alt=""/>
            </Center>
          </GridItem>
        </Grid>
      </Center>
    </Container>
  )
}
