"use client"
import React, { useState } from 'react'
import { useForm, Resolver } from "react-hook-form"
import { Card } from '@/components/ui/card'
import Input from '@/components/ui/input';
import Link from 'next/link';
import { typeValidationSchema } from './registervalidationSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { ButtonLoading } from '../buttonLoading';
import { createUser } from '@/actions/users';
import { UserRole } from "@prisma/client";
import toast from 'react-hot-toast';


export  type FormData={
  fullName:string,
    email:string,
    password:string,
    confirmPassword:string
    phone:string,
    role?:UserRole


}
export default function RegisterForm({role="USER"}:{role?:UserRole}) {
    const {
        register,
        setValue,
        reset,
        handleSubmit,
        formState: { errors },
      } = useForm<FormData>({
        resolver: yupResolver(typeValidationSchema)
      });

const [isButtonLoading,setIsButtonLoading]=useState(false)
      const OnhandleSubmit=async(values:FormData)=>{
        try {
          setIsButtonLoading(true)
          values.role=role
          debugger
         const user= await createUser(values)
         if(user&& user.status===200){
           toast.success("User created successfully.")
           reset()
}else{
  toast.error(user.error)
}
setIsButtonLoading(false)
          
        } catch (error:any) {
          console.log(error.message)
          toast.error(error)
          setIsButtonLoading(false)
        }
       // await typeValidationSchema.validate(values, { abortEarly: false });
console.log(values)
      }

  return (
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" noValidate onSubmit={handleSubmit(OnhandleSubmit)}>
          
              <div className="mt-2">
               <Input
                {...register("fullName")}
              
                error={errors.fullName?.message}
                label='Full Name'
                type='text'
                variant='normal'
                dimension='small'
                />
              
              </div>
            
            
             
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
              <div className="mt-2">
              <Input
                {...register("phone")}
                error={errors.phone?.message}
                label='Phone Number'
                type='tel'
                variant='normal'
                dimension='small'
                />
              </div>
          

            <div>
              
              <div className="mt-2">
              <Input
                {...register("password")}
                error={errors.password?.message}
                label='password'
                type='password'
                variant='normal'
                dimension='small'
                />
              </div>
            </div>
            
              
              <div className="mt-2">
              <Input
                {...register("confirmPassword")}
                error={errors.confirmPassword?.message}
                label='Confirm password'
                type='password'
                variant='normal'
                dimension='small'
                />
              
            </div>

            <div>
              <ButtonLoading
             
                isLoading={isButtonLoading}
                title={isButtonLoading? "Creating account please wait":"Register"}/>
        
    
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Already have an Acount?{' '}
            <Link href="/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
            Sign in
            </Link>
          </p>
        </div>
  )
}
