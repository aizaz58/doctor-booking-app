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
import { useRouter } from "next/navigation";
import toast from 'react-hot-toast';
import { Alert } from 'flowbite-react';
import { HiInformationCircle } from 'react-icons/hi';
import { signIn } from 'next-auth/react';




type FormData={
    email:string,
    password:string
}
const defaultValues={
    email:'',
    password:''
}



function LogInForm() {
  const router=useRouter()

  const {
    register,
    setValue,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(logInValidationSchema)
  });
const [isButtonLoading,setIsButtonLoading]=useState(false)
const [showNotification, setShowNotification] = useState(false);
  const OnhandleSubmit=async(values:FormData)=>{
    setIsButtonLoading(true)
   // await typeValidationSchema.validate(values, { abortEarly: false });
console.log(values)
try {
   setIsButtonLoading(true)
  console.log("Attempting to sign in with credentials:", values);
  const loginData = await signIn("credentials", {
    ...values,
    redirect: false,
  });
  console.log("SignIn response:", loginData);
  if (loginData?.error) {
    console.log(loginData.error)
     setIsButtonLoading(false)
    toast.error("Sign-in error: Check your credentials");
    setShowNotification(true);
  } else {
    // Sign-in was successful
    setShowNotification(false);
    reset();
     setIsButtonLoading(false)
    toast.success("Login Successful");
    router.push("/dashboard");
  }
} catch (error) {
   setIsButtonLoading(false)
  console.error("Network Error:", error);
  toast.error("Its seems something is wrong with your Network");
}
setIsButtonLoading(false)
  }
  return (
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" noValidate onSubmit={handleSubmit(OnhandleSubmit)}>
          {showNotification && (
            <Alert color="failure" icon={HiInformationCircle}>
              <span className="font-medium">Sign-in error!</span> Please Check
              your credentials
            </Alert>
          )}
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