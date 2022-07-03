import React, {useEffect, useState} from 'react';
import {useForm} from 'react-hook-form'
import SaranaHandler from './SaranaHandler'
import {Button, Box, FormControl, FormLabel, Input, FormHelperText} from '@chakra-ui/react'

export default function SaranaForm() {
    const { register, formState: { errors }, handleSubmit} = useForm();
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState({})

    useEffect (() => {
      const value = JSON.parse(localStorage.getItem('item'))
      if(value){
        setData(value)
      }
    }, [])
    
    const submitHandler = async (values) => {
        console.log(values)
        setIsLoading(!isLoading)
        await SaranaHandler(values);
    };

    console.log(data)

    return (
        <Box>
            <FormControl method="POST">
              <FormLabel>Judul Pengaduan</FormLabel>
              <Input 
                  type="text"
                  name="name"
                  id="name"
                  placeholder='Kerusakan meteran air'
                  {...register("name", { required: true })}
              />
              {errors.name?.type === 'required' && <FormHelperText textColor='red' mb={4}>Please fill your name</FormHelperText>}
              <FormLabel mt={4}>Tanggal</FormLabel>
              <Input 
                  type="date"
                  name="date"
                  id="date"
                  {...register("date", { required: true })}
              />
              {errors.date?.type === 'required' && <FormHelperText textColor='red' mb={4}>Please fill your date</FormHelperText>}
              <FormLabel mt={4}>Alamat</FormLabel>
              <Input 
                  type="text"
                  name="address"
                  id="address"
                  placeholder='Jl. Raya Cikarang No.1'
                  {...register("address", { required: true })}
              />
              {errors.address?.type === 'required' && <FormHelperText textColor='red' mb={4}>Please fill your address</FormHelperText>}
              <FormLabel>Deskripsi</FormLabel>
              <Input 
                  type="text"
                  name="description"
                  id="description"
                  placeholder='Kerusakan meteran air sudah terjadi sejak 2 hari lalu dan sampai saat ini masih belum bisa digunakan'
                  {...register("description", { required: true })}
              />
              {errors.description?.type === 'required' && <FormHelperText textColor='red' mb={4}>Please fill your description</FormHelperText>}
              <FormLabel mt={4}>Gambar</FormLabel>
              <Input 
                  type="file"
                  name="image"
                  id="image"
                  {...register("image", { required: true })}
              />
              {errors.image?.type === 'required' && <FormHelperText textColor='red' mb={4}>Please fill your image</FormHelperText>}
              {/* <Input 
                  display='none'
                  type="text"
                  name="id_user"
                  id="id_user"
                  value={data.id}
                  {...register("id_user")}
              /> */}
              <Button
                  mt={4}
                  bg="blue.400"
                  textColor={'white'}
                  isLoading={isLoading}
                  type='submit'
                  onClick={handleSubmit(async (values) => {
                      await submitHandler(values);
                  })}
              >
                  Kirim
              </Button>
            </FormControl>
        </Box>
    );
}