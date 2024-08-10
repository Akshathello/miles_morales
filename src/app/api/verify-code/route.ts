import dbConnect from "@/lib/db.connect";
import { UserModel } from "@/app/models/Users";
import { sendVerificationEmail } from "../../../../helpers/sendVerificationEmail";


export async function POST(request:Request) {

    await dbConnect()
          
    try {
        const {username, code,email} = await request.json()

        const decodedUsername = decodeURIComponent(username)

        const user = await UserModel.findOne({
            username: decodedUsername
    })


    if(!user) {
        return Response.json({
            success: false,
            message: "user not found"
         }, {
            status: 500
         } )
    }


    const isCodeValid = user.verifyCode === code
    const isCodeNotExpired = new Date(user.verifyCodeExpiry) > new Date()

    if(isCodeValid && isCodeNotExpired) {

        user.isVerified = true
        await user.save()

        return Response.json({
            success: true,
            message: "Your account is verified"

    }, {
        status: 200
    })  
    }

    if (!isCodeNotExpired) {

        return Response.json({
            success: false,
            message: "The code is expired kindly regenerate it.."
        }, {
            status:400
        })
    } 

     if (!isCodeValid) {

        return Response.json({
            success: false,
            message: "code is invalid"
        }, {status:400})
    }
     
    let verifyCode = Math.floor(100000 + Math.random() * 900000).toString()

    const emailResponse = await sendVerificationEmail(
        email,
        username,
        verifyCode
    )

    if(!emailResponse.success) {

        return Response.json({
            success: false ,
            message: emailResponse.message
        }, {
            status: 500
        })

    }

    return Response.json({
        success: true,
        message: 'Verification code has been sent, kindly verify your email.'
    })
       

    } catch (error) {
        console.error("Error while verifying user", error)

        return Response.json({
            success: false,
            message: "Unexpected error while verifying user"
        }, {
            status: 500
        })
    }
}
