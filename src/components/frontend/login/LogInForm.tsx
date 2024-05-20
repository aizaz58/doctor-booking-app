"use client"
import React, { useState } from 'react'
import { useForm, Resolver } from "react-hook-form"
import { Card } from '@/components/ui/card'
import Input from '@/components/ui/input';
import Link from 'next/link';
import { yupResolver } from '@hookform/resolvers/yup';
import { typeValidationSchema } from '../register/registervalidationSchema';
import { logInValidationSchema } from './loginValidatonSchema';
import { ButtonLoading } from '../buttonLoading';




type FormData={
    email:string,
    password:string
}
const defaultValues={
    email:'',
    password:''
}



function LogInForm() {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(logInValidationSchema)
  });

const [isButtonLoading,setIsButtonLoading]=useState(false)
  const OnhandleSubmit=async(values:FormData)=>{
    setIsButtonLoading(true)
   // await typeValidationSchema.validate(values, { abortEarly: false });
console.log(values)
setIsButtonLoading(false)
  }
  return (
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" noValidate onSubmit={handleSubmit(OnhandleSubmit)}>
            
              <div className="mt-2">
              <Input
                {...register("email")}
                error={errors.email?.message}
                label='Email Address'
                type='email'
                variant='normal'
                dimension='small'
                />
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  <Link href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </Link>
                </div>
              </div>
              <div className="mt-2">
              <Input
                {...register("password")}
                error={errors.password?.message}
            
                type='password'
                variant='normal'
                dimension='small'
                />
              </div>
            </div>

            <div>
            <ButtonLoading
             
             isLoading={isButtonLoading}
             title={isButtonLoading? "Logging in please wait":"Log In"}/>
     
 
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Donot have an Acount?{' '}
            <Link href="/register" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
            Register
            </Link>
          </p>
        </div>
  )
}

export default LogInForm