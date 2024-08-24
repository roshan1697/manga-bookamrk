import { Router } from "express";
import { userMiddleware } from "../middleware";
import prisma from "../db";


export const userRouter = Router()

userRouter.post('/signin', async(req,res)=>{
    const {username , password} = req.body
    const User = await prisma.user.findUnique({
        where:{
            email:username
        }
    })
    if(!User){
        const newUser = await prisma.user.create({
        data:{
            email:username,
            password:password
            }
        
        })
        
        return res.status(200).json(newUser)
    }
    if(User.password !== password){
        return res.status(404).send('authenication error')
    }

    return res.status(200).json(User)
})
