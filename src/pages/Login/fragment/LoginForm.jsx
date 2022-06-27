import React, {useState} from 'react';
import {useForm} from 'react-hook-form'
import loginHandler from './LoginHandler'
import {Eye, EyeOff} from 'react-feather'
import {Button, Container, Heading, FormControl, FormLabel, Input, FormErrorMessage, InputGroup, InputRightElement, IconButton, FormHelperText} from '@chakra-ui/react'

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
        <Container>
            <Heading>Login</Heading>
            <FormControl method="POST">
                <FormLabel>Email</FormLabel>
                <Input 
                    type="text"
                    name="email"
                    id="email"
                    {...register("email", { required: true })}
                />
                {errors.email?.type === 'required' && <FormHelperText>Please fill your email</FormHelperText>}
                <FormLabel>Password</FormLabel>
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
                {errors.email?.type === 'required' && <FormHelperText>Please fill your password</FormHelperText>}
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
            {/* <form method='POST' onSubmit={handleSubmit(async (values) => {
                await submitHandler(values);
            })}>
                <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="email"
                    {...register("email", { required: true })}
                />
                <label>{errors.email?.type === 'required' && "Please fill your email"}</label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="password"
                    {...register("password", { required: true })}
                />
                <label>{errors.password?.type === 'required' && "Please fill your password"}</label>
                <Button
                    mt={4}
                    colorScheme='teal'
                    isLoading={isLoading}
                    type='submit'
                >
                    Submit
                </Button>
            </form> */}
        </Container>
    );
}