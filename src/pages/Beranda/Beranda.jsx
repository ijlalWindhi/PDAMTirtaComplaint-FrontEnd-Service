import React,{useState, useEffect} from 'react'
import axios from 'axios'
import { MdBuild , MdCall } from "react-icons/md"
import {Stack, Button, Container} from '@chakra-ui/react'
import {API_URL} from '../../utils/constants'

export default function Beranda() {
    const [user, setUser] = useState([])
    
    const getUser = () => {
        axios({ method: "GET",
                url:base_url + 'user/'
        })
            .then(res => {
                setUser(res.data.user)
        })
    }

    useEffect(() => {
        getUser()
    })    

  return (
    <div>
        <Container>
            <Stack direction='row' spacing={4}>
                <Button leftIcon={<MdBuild />} colorScheme='pink' variant='solid'>
                    Settings
                </Button>
                <Button rightIcon={<MdCall />} colorScheme='blue' variant='outline'>
                    Call us
                </Button>
            </Stack>
            <h1>Data User</h1>
            {user.map((item, index) => {
                return(
                    <h1 key={index}>{item.name}</h1>
                )
            })}
        </Container>
    </div>
  )
}
