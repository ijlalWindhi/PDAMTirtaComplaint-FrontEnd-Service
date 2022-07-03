import React from 'react'
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  useDisclosure,
  useColorModeValue,
  MenuList,
  MenuItem,
  Text,
  Stack,
} from '@chakra-ui/react';
import {AlignCenter, X} from 'react-feather'
import {NavLink} from 'react-router-dom'
import Logo from '../../../assets/image/logo.svg'
import LogoutHandler from './fragment/LogoutHandler'

const getJson = localStorage.getItem('item')
const dataNavbar = [
  {
    label: 'Beranda',
    link: '/'
  },
  {
    label: 'Info',
    link: '/'
  },
  {
    label: 'Dukungan',
    link: '/dukungan'
  }
]

const NavbarLoginMenu = () => {
  if(getJson === null) {
    return(
      <NavLink to='/login'>
        <Button>Login</Button>
      </NavLink>
    )
  }else {
    return(
      <Menu>
        <MenuButton
          as={Button}
          rounded={'full'}
          variant={'link'}
          cursor={'pointer'}
          minW={0}>
          <Avatar
            size={'md'}
            src={
              'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
            }
          />
        </MenuButton>
        <MenuList fontWeight={'semibold'}>
          <MenuItem>Profile</MenuItem>
          <MenuItem bg={'red.400'} textColor={'white'} onClick={LogoutHandler} _hover={{bg: "red.400"}}>Logout</MenuItem>
        </MenuList>
      </Menu>
    )
  }
}

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg={useColorModeValue('white')} px={[4,20]} py={[2,4]}>
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <IconButton
          size={'md'}
          p={2}
          icon={isOpen ? <X /> : <AlignCenter />}
          aria-label={'Open Menu'}
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={8} alignItems={'center'}>
          <Box w={'28'}><img src={Logo}/></Box>            
        </HStack>
        <HStack
          as={'nav'}
          spacing={10}
          fontWeight={'bold'}
          fontSize={'lg'}
          textColor={'gray.500'}
          display={{ base: 'none', md: 'flex' }}>
          {dataNavbar.map((item, index) => {
            return(
              <NavLink to={item.link} key={index}>
                <Text
                  px={2}
                  py={1}
                  rounded={'md'}
                  textTransform={'uppercase'}
                  _activeLink={{textColor: 'blue.500'}}
                  _hover={{
                    textDecoration: 'none',
                    textColor: 'blue.700'
                  }}
                >{item.label}</Text>
              </NavLink>
            )
          })}
        </HStack>
        <Flex alignItems={'center'}>
          <NavbarLoginMenu/>
        </Flex>
      </Flex>
      {isOpen ? (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as={'nav'} spacing={4}>
            {dataNavbar.map((item, index) => {
              return(
                <NavLink to={item.link} key={index}>
                  <Link
                  px={2}
                  py={1}
                  rounded={'md'}
                  textTransform={'uppercase'}
                  _hover={{
                    textDecoration: 'none',
                    textColor: 'blue.700'
                  }}>{item.label}</Link>
                </NavLink>
              )
            })}
          </Stack>
        </Box>
      ) : null}
    </Box>
  )
}
