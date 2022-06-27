import { useState } from 'react';
import {useForm} from 'react-hook-form'
import loginHandler from './LoginHandler'

export default function LoginForm() {
    const { register, formState: { errors }, handleSubmit} = useForm();    
    
    const submitHandler = async (values) => {
        await loginHandler(values);
    };

    return (
        <div>            
            <h1>Login</h1>
            <form method='POST' onSubmit={handleSubmit(async (values) => {
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
                <button type="submit">
                    Login
                </button>
            </form>
        </div>
    );
}