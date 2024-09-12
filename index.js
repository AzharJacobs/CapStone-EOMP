import express from 'express'
import cors from 'cors'
import { userRouter } from './route/userRouter.js'
import { productsRouter } from './route/productsRouter.js'

let port = process.env.PORT || 4004
const app = express()

const corsOptions = {
    origin: ['http://localhost:8080', 'https://capstone-eomp-yhlw.onrender.com'],
    credentials: true
  };

  app.use(cors(corsOptions))
app.use(express.json())
app.use(express.static('public'))
 
app.use('/user', userRouter)

app.use('/products', productsRouter)

app.listen(port,()=>{
    console.log('http://localhost:'+ port);
})