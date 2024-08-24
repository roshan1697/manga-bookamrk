import { Router } from "express";
import prisma from "../db";

export const mangaRouter = Router()

mangaRouter.get('/', async(req,res)=>{
    const data = await prisma.manga.findMany()
    return res.status(200).json(data)
})


mangaRouter.post('/bookmark', async(req,res)=>{
    const { mangaId , userId  }  = req.body

    const data = await prisma.bookmark.create({
        data:{
            userId:userId,
            mangaId:mangaId
        }
    })
    return res.status(200).json({
        message:'bookmark created'
    })
})

mangaRouter.post('/bookmarkdelete', async(req,res)=>{
    const {bookmarkId} = req.body

    const data =  await prisma.bookmark.delete({
        where:{
            id:bookmarkId
        }
    })
    return res.status(200).json({
        message:'bookmark deleted'
    })
})