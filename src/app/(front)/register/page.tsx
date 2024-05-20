"use client"
import React from 'react'
import { useForm, Resolver } from "react-hook-form"
import { Card } from '@/components/ui/card'
import Input from '@/components/ui/input';
import Link from 'next/link';
import RegisterForm from '@/components/frontend/register/RegisterForm';



type FormData={
  fullName:string,
    email:string,
    password:string,
    confirmPassword:string
}
const defaultValues={
    email:'',
    password:''
}
export default function page() {
   
  return (
    <div className='bg-blue-100 min-h-screen py-4'>
        <div className="grid md:grid-cols-2 grid-cols-1 p-4  max-w-5xl mx-auto">
            <div className="hidden md:block linear-bg">
               
            </div>
            <div className="bg-white">
               
      <div className="flex  min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
           Create new account
          </h2>
        </div>

       <RegisterForm/>
      </div>

                   
            </div>
       </div>
    </div>
  )
}
