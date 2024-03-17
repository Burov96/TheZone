
import mongoose from "mongoose"
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        min:6,
        max:20
    },
    email:{
        type:String,
        unique:true,
        min:6,
        max:50
    },
    password:{
        type:String,
        // min:6,
        // max:20
    },
    img:{
        type:String
    },
    isAdmin:{
        required:true,
        type:Boolean,
        default:false
    },
    posts: [{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Post"  
    }]
},{timestamps:true});

const postSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true,
        min:15,
    },
    description:{
        type:String,
        required:true,
        min:50,
    },

    img:{
        type:String
    },
    userId:{
        type:String,
    unique:true,
    required:true
    },
    slug:{
    type:String,
    required:true,
    unique:true,
    },
    author: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User"
    } ,
    comments: [{
        userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        text: String,
        date: { type: Date, default: Date.now }
    }],
    likes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }]
},{timestamps:true})

export const User = mongoose.models?.User || mongoose.model("User",userSchema)
export const Post = mongoose.models?.Post || mongoose.model("Post",postSchema)
