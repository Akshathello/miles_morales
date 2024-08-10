import { UserModel } from "@/app/models/Users";
import dbConnect from "@/lib/db.connect";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from 'bcryptjs'
   


export const authOptions: NextAuthOptions = {


    providers: [
        CredentialsProvider({
            id: 'credentials',
            name: 'Credentials',
    
            credentials: {
                email: {label: 'email', type: 'text'},
                password: {label: 'password', type: 'password'},
            },
            async authorize(credentials:any): Promise<any> {
                await dbConnect();


                try {

                    const user = await UserModel.findOne({
                      $or: [
                        {email: credentials.identifier},
                        {username: credentials.identifier},
                      ],
                    });

                    if(!user) {
                        throw new Error('No user found with this email');
                    };

                    if(!user.isVerified) {
                        throw new Error('Account verification is still pending, kindly verify.')
                    }

                    const isPasswordCorrect = await bcrypt.compare(
                        credentials.password,
                        user.password
                    ); 

                    console.log(isPasswordCorrect)

                    if(isPasswordCorrect) {
                        return user;
                    } else {
                        throw new Error("Incorrect password");
                    }

                    
                } catch (err:any) {
                    throw new Error(err)
                }

            }
        })

    ],
   


    callbacks : {
        async session({session,token}) {
            if (token) {
                session.user._id = token._id
                session.user.isVerified = token.isVerified
                session.user.username = token.username
            }
            return session;
        },

        async jwt({user,token}) {

            if(user) {
             token._id = user._id?.toString()
             token.isVerified= user.isVerified;
             token.username = user.username
            }

            return token

        },
    },

    session : {
        strategy: 'jwt'
    },

    secret: process.env.NEXTAUTH_SECRET,

    pages: {
      signIn : '/sign-in',
    }


}