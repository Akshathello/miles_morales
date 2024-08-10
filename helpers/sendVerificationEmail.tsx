import {resend} from "@/lib/resend"
import VerificationEmail from "../emails/verificationEmail"
import {ApiResponse} from "../src/types/ApiResponse"


export async function sendVerificationEmail(
    email:string,
    username: string, 
    verifyCode:string,

): Promise<ApiResponse> {
    try {

        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: email,
            subject: 'Miles Morales | verification code',
            react: VerificationEmail({username, otp: verifyCode})
          });

        return{success: true, message:'Verification mail send successfully'}
        
    } catch (emailError) {
        console.error("Error while sending verification email", emailError)

        return{success: false, message: 'Failed to send verifcation email'}
    }

}
