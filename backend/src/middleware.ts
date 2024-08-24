import { NextFunction, Request, Response } from "express";


export const userMiddleware = (req:Request,res:Response , next:NextFunction) =>{
    const user = true
    if(user){
        next()
    }else {
        return res.status(403).json({
            message: 'Not Authorized'
        })
    }

}