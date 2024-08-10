import mongoose, {Schema,Document} from "mongoose";

export interface Message extends Document{
    content ?: String,
    createdAt: Date
}

export interface User extends Document {
    username : string,
    email: string,
    password: string,
    verifyCode: string,
    verifyCodeExpiry: Date,
    isVerified: true,

}

const UserSchema : Schema<User> = new Schema({
    email: {
        type:String,
        required:[true, "username is required"],
        trim:true,
        unique:true,
        match: [/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g, "please use  a valid email address"]
    },

    username : {
        type: String,
        required: [true,"username is required"],
        trim: true,
        unique: true,
    },

    password: {
        type: String,
        required: [true, "Password is required"]
    },

    verifyCode: {
        type: String,
        required: [true,"Please verify the code "]
    },

    verifyCodeExpiry: {
        type: Date,
        required: [true, "kindly verify before the code expires"]
    },

    isVerified:{
        type:Boolean,
        required: [true,"Your account is successfully verified"]

    }


})

export const UserModel = (mongoose.models.User as mongoose.Model<User> ) || mongoose.model <User>("User",UserSchema)