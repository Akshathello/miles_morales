import { UserModel } from "@/app/models/Users";
import { usernameValidation } from "@/app/schemas/signUpSchema";
import dbConnect from "@/lib/db.connect";
import * as z from "zod";


const usernameQuerySchema = z.object({
     username : z.string(usernameValidation)
})
   

export async function GET(request:Request) {

    await dbConnect()


    try {
        
         const {searchParams} = new URL(request.url)

         const queryParam = {
            username: searchParams.get('username')
        }

        const result = usernameQuerySchema.safeParse(queryParam)

        if(!result.success) {
            const usernameErrors = result.error.format().username?._errors || [];

            return Response.json ({
                success: false,
                message: usernameErrors?.length>0?usernameErrors.join(',') : 'Invalid query parameter'
            }, {
                status: 400
            })
        }


        const {username} = result.data


        const existingVerifiedUser = await UserModel.findOne({
            username,
            isVerified:true
        })


        if(existingVerifiedUser) {
            return Response.json({

                success: false,
                message: "This username is not available"
            }, {
                status: 200
            })
        }
       
            return Response.json({

                success: true,
                message: "Username is unique"
            }, {
                status: 200
            })
        
    } catch (error) {

        console.error("Unexpected error occurred while checking username", error)

        return Response.json({
            success: false,
            message:"Unexpected error occurred while checking username"
        }, {status: 500})
        
    }
}