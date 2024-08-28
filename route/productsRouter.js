import express from 'express'
import {getProducts , getProductsId , insertProducts, deleteProducts , updateProducts } from '../controller/productsController.js'

const productsRouter = express.Router()

productsRouter.get('/', getProducts)

productsRouter.get( '/:id', getProductsId)

productsRouter.post( '/:insert', insertProducts)

productsRouter.delete('/:id', deleteProducts)

productsRouter.patch('/:id', updateProducts)

export {productsRouter}