import express from 'express'
import cors from 'cors'
import { userRouter } from './route/userRouter.js'
import { productsRouter } from './route/productsRouter.js'

let port = process.env.PORT || 2020
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static('public'))
 
app.use('/user', userRouter)

app.use('/products', productsRouter)

app.listen(port,()=>{
    console.log('http://localhost:'+ port);
})