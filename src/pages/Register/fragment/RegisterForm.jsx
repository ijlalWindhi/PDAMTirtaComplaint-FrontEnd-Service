import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import {useForm} from 'react-hook-form'
import RegisterHandler from './RegisterHandler'
import {Eye, EyeOff} from 'react-feather'
import {Button, Box, Heading, Grid, GridItem, FormControl, FormLabel, Input, Text, InputGroup, InputRightElement, IconButton, FormHelperText} from '@chakra-ui/react'

export default function LoginForm() {
    const { register, formState: { errors }, handleSubmit} = useForm();
    const [isLoading, setIsLoading] = useState(false);
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)
    
    const submitHandler = async (values) => {
        console.log(values)
        setIsLoading(!isLoading)
        await RegisterHandler(values);
    };

    return (
        <Box>
            <Box>
                <Heading fontWeight={800}>Register</Heading>    
                <Text fontSize='md' my={2}>Register to create account</Text>
            </Box>
            <Box>
                <FormControl method="POST">
                    <Grid
                        gap={{base:"5",lg:'10'}}
                        templateColumns={{ lg:"repeat(2, 1fr)"}}
                        justifyContent="center"
                    >
                        <GridItem>
                            <FormLabel>Name</FormLabel>
                            <Input 
                                type="text"
                                name="name"
                                id="name"
                                {...register("name", { required: true })}
                            />
                            {errors.name?.type === 'required' && <FormHelperText textColor='red' mb={4}>Please fill your name</FormHelperText>}
                            <FormLabel mt={4}>Username</FormLabel>
                            <Input 
                                type="text"
                                name="username"
                                id="username"
                                {...register("username", { required: true })}
                            />
                            {errors.username?.type === 'required' && <FormHelperText textColor='red' mb={4}>Please fill your username</FormHelperText>}
                            <FormLabel mt={4}>Email</FormLabel>
                            <Input 
                                type="text"
                                name="email"
                                id="email"
                                {...register("email", { required: true })}
                            />
                            {errors.email?.type === 'required' && <FormHelperText textColor='red' mb={4}>Please fill your email</FormHelperText>}
                        </GridItem>
                        <GridItem>
                            <FormLabel>Address</FormLabel>
                            <Input 
                                type="text"
                                name="address"
                                id="address"
                                {...register("address", { required: true })}
                            />
                            {errors.address?.type === 'required' && <FormHelperText textColor='red' mb={4}>Please fill your address</FormHelperText>}
                            <FormLabel mt={4}>Telephone</FormLabel>
                            <Input 
                                type="tel"
                                name="telephone"
                                id="telephone"
                                {...register("telephone", { required: true })}
                            />
                            {errors.telephone?.type === 'required' && <FormHelperText textColor='red' mb={4}>Please fill your telephone</FormHelperText>}
                            <FormLabel mt={4}>Password</FormLabel>
                            <InputGroup>
                                <Input 
                                    type={show ? 'text' : 'password'}
                                    name="password"
                                    id="password"
                                    {...register("password", { required: true })}
                                />
                                <InputRightElement>
                                    <IconButton
                                    borderRadius="full"
                                    size="sm"
                                    variant="ghost"
                                    onClick={handleClick}
                                    aria-label={'whod hide'}
                                    icon={show ? <EyeOff /> : <Eye />}
                                    />
                                </InputRightElement>
                            </InputGroup>
                            {errors.password?.type === 'required' && <FormHelperText textColor='red'>Please fill your password</FormHelperText>}
                        </GridItem>
                    </Grid>
                    <Input 
                        display='none'
                        type="text"
                        name="role"
                        id="role"
                        value="user"
                        {...register("role")}
                    />
                    <Text mt={4}>Have an account?<Link to='/login'> Login</Link></Text>
                    <Button
                        mt={4}
                        colorScheme='teal'
                        isLoading={isLoading}
                        type='submit'
                        onClick={handleSubmit(async (values) => {
                            await submitHandler(values);
                        })}
                    >
                        Submit
                    </Button>
                </FormControl>
            </Box>
        </Box>
    );
}