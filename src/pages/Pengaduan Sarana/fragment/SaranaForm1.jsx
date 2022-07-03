import React, {useState} from 'react';
import {Button, Box, FormControl, FormLabel, Input} from '@chakra-ui/react'
import axios from 'axios';
import {API_URL} from '../../../utils/constants'

export default function SaranaForm() {
    const [isLoading, setIsLoading] = useState(false);
    const [name, setName] = useState('')
    const [date, setDate] = useState('')
    const [address, setAddress] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState('')

    const value = JSON.parse(localStorage.getItem('item'))
    const id = value.id
    console.log(id)

    const PENGADUAN_URL = API_URL + 'report/add'
    const submitHandler = async (e) => {
        let form = new FormData()
        form.append('id_user', id)
        form.append('name', name)
        form.append('date', date)
        form.append('address', address)
        form.append('description', description)
        form.append('image', image)

        try{
            axios.post(PENGADUAN_URL, form)
            .then(res => {
            setIsLoading(!isLoading)
            // reload page
            window.location.reload()
            alert('Sukses memberikan pengaduan')
            // navigate page to login
            window.location='/dukungan'
            })
        } catch(err){
            console.log(err)
        }
    }

    return (
        <Box>
            <FormControl method="POST">
              <FormLabel>Judul Pengaduan</FormLabel>
              <Input 
                  type="text"
                  name="name"
                  id="name"
                  placeholder='Kerusakan meteran air'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
              />
              <FormLabel mt={4}>Tanggal</FormLabel>
              <Input 
                  type="date"
                  name="date"
                  id="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
              />
              <FormLabel mt={4}>Alamat</FormLabel>
              <Input 
                  type="text"
                  name="address"
                  id="address"
                  placeholder='Jl. Raya Cikarang No.1'
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
              />
              <FormLabel>Deskripsi</FormLabel>
              <Input 
                  type="text"
                  name="description"
                  id="description"
                  placeholder='Kerusakan meteran air sudah terjadi sejak 2 hari lalu dan sampai saat ini masih belum bisa digunakan'
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
              />
              <FormLabel mt={4}>Gambar</FormLabel>
              <Input 
                  type="file"
                  name="image"
                  id="image"
                  onChange={(e) => setImage(e.target.files[0])}
              />
              <Button
                  mt={4}
                  bg="blue.400"
                  textColor={'white'}
                  isLoading={isLoading}
                  type='submit'
                  onClick={() => submitHandler({name, date, address, description, image, id})}
              >
                  Kirim
              </Button>
            </FormControl>
        </Box>
    );
}