import React, {useState} from 'react';
import {useForm} from 'react-hook-form'
import loginHandler from './LoginHandler'
import {Eye, EyeOff} from 'react-feather'
import {Button, Box, Heading, FormControl, FormLabel, Input, Text, InputGroup, InputRightElement, IconButton, FormHelperText} from '@chakra-ui/react'

export default function LoginForm() {
    const { register, formState: { errors }, handleSubmit} = useForm();
    const [isLoading, setIsLoading] = useState(false);
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)
    
    const submitHandler = async (values) => {
        setIsLoading(!isLoading)
        await loginHandler(values);
    };

    return (
        <Box>
            <Box>
                <Heading fontWeight={800}>Login</Heading>    
                <Text fontSize='md' my={2}>Login to submit a report</Text>
            </Box>
            <Box>
                <FormControl method="POST">
                    <FormLabel>Email</FormLabel>
                    <Input 
                        type="text"
                        name="email"
                        id="email"
                        {...register("email", { required: true })}
                    />
                    {errors.email?.type === 'required' && <FormHelperText textColor='red' mb={4}>Please fill your email</FormHelperText>}
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
                    {errors.email?.type === 'required' && <FormHelperText textColor='red'>Please fill your password</FormHelperText>}
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