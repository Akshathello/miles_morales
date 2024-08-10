import { z } from "zod";




export const usernameValidation = 
z.string().max(20, "Username must not exceed 20 characters").min(2, { message :"Username must contain atleast 2 characters"}).regex(/^[a-zA-Z0-9_]+$/,{message:"Username must not contain any special characters"} )


export const signUpSchema = z.object({
    username : usernameValidation,
    email: z.string().email({message: 'invalid email address'}),
    password: z.string().min(6, {message:'Password must be atleast 0 characters'})
})




