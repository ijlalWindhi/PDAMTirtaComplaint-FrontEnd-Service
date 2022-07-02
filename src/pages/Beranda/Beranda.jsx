import React,{useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { MdBuild , MdCall } from "react-icons/md"
import {Stack, Button, Container} from '@chakra-ui/react'
import {API_URL} from '../../utils/constants'
import Carousel from '../../components/fragments/carousel/Caraousel'
import Navbar from '../../components/fragments/navbar/Navbar'

export default function Beranda() {
    const [user, setUser] = useState([])
    
    const getUser = () => {
        axios({ method: "GET",
                url:API_URL + 'user/'
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
        <Navbar/>
    </div>
  )
}
