"use server"

import EmailTemplate from "@/components/email/EmailTemplate";
import { FormData } from "@/components/frontend/register/RegisterForm";
import { prismaClient } from "@/lib/db";
import { NextResponse } from "next/server";
import { Resend } from "resend";
import bcrypt from "bcrypt";
export async function createUser(data:FormData){
    const resend = new Resend(process.env.RESEND_API_KEY);
    const {fullName,email,password,phone,role}=data

try {
    const existingUSer=await prismaClient.user.findUnique({where:{email}})
    debugger
    if(existingUSer){
        return {
            data:undefined,
            error:`User with ${email} already exists.`,
            status:400
        }
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    //Generate Token
    const generateToken = () => {
      const min = 100000; // Minimum 6-figure number
      const max = 999999; // Maximum 6-figure number
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    const userToken = generateToken();
 
    const newUser = await prismaClient.user.create({
      data: {
        name: fullName,
        email,
        phone,
        password: hashedPassword,
        role,
        token: userToken,
      },
    });
    //Send an Email with the Token on the link as a search param
    const token = newUser.token;
    const userId = newUser.id;
    const firstName = newUser.name?.split(" ")[0];
    const linkText = "Verify your Account ";
    const message =
      "Thank you for registering with Medical App. To complete your registration and verify your email address, please enter the following 6-digit verification code on our website :";
    const sendMail = await resend.emails.send({
      from: "hafizaizaz58@gmail.com",
      to: [email],
      subject: "Verify Your Email Address",
      react: EmailTemplate({ name:firstName, token, linkText, message }),
    });
    console.log(token);
    console.log(sendMail);
    console.log(newUser);
    return {
      data: newUser,
      error: null,
      status: 200,
    };
} catch (error:any) {
    return {
        error: error,
        data: undefined,
        status: 500
      };
}    
}