"use client"


import { verifySchema } from '@/app/schemas/verifyCodeSchema'
import { Button } from '@/Components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/Components/ui/form'
import { Input } from '@/Components/ui/input'
import { useToast } from '@/Components/ui/use-toast'
import { ApiResponse } from '@/types/ApiResponse'
import { zodResolver } from '@hookform/resolvers/zod'
import axios, { AxiosError } from 'axios'
import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation'
import React from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

function verifyAccount() {

   const router = useRouter()
   const params = useParams<{username:string}>()

   const {toast} = useToast()

   const form = useForm<z.infer<typeof verifySchema>>({
    resolver: zodResolver(verifySchema)
   })


   const onSubmit = async(data:z.infer<typeof verifySchema>) =>{


    try {

        const response = await axios.post('/api/verify-code', {
            username : params.username,
            code: data.code
        })


        toast({
            title: "success",
            description: response.data.message
        })


        router.replace('/sign-in');

        
    } catch (error) {

        const axiosError = error as AxiosError<ApiResponse>;


        toast({
            title: "Signup failed",
            description: axiosError.response?.data.message,
            variant : "destructive"
        })
        
    }
   }

  return (
    <div className='flex justify-center items-center min-h-screen bg-gray-100'>

        <div className='w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md'>

            <div className='text-center'>

                <h1 className = 'text-4xl font-extrabold tracking-light lg:text-5xl mb-6' >
                    Verify your account
                </h1>

                <p className='mb-4'> Enter the verification code which has been sent to you.</p>
            </div>

            <Form {...form} >

                <form onSubmit = {form.handleSubmit(onSubmit)} className='space-y-6'>
                    <FormField
                    control = {form.control}
                    name = "code"
                    render = {({field}) => (
                        <FormItem>
                            <FormLabel>Code</FormLabel>
                            <FormControl>
                             <Input placeholder= "code" {...field} />
                            </FormControl>

                            <FormMessage/>
                        </FormItem>
                    )}
                    />

                    <Button type = "submit"> Submit</Button>
                </form>
            </Form>

            <div className='text-center mt-4'>

                <p> Click <Link href ='/verify-code' className='text-blue underline'>here</Link> to regenerate the pin</p>
 
            </div>

        </div>

    </div>
  )
}

export default verifyAccount