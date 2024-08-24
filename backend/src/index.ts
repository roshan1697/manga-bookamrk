import express from 'express'
import { userRouter } from './router/user'
import { mangaRouter } from './router/manga'
import cors from 'cors'
const app = express()
app.use(express.json())
app.use(cors(
    {
        origin:'http://localhost:3000/'
    }
))

app.use('/api/user',userRouter)
app.use('/api/manga', mangaRouter)


app.listen(3004,()=>{
    console.log('server running on 3004')
})