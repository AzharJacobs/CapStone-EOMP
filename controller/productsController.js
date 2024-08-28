import { getProductsDb , getProductsIDDb , insertProductsDb , deleteProductsDb , updateProductsDb } from "../model/productsDB.js";

const getProducts =  async(req,res)=> {
    res.json(await getProductsDb());
}

const getProductsId =  async(req,res)=> {
    console.log(req.params.id);
    res.json(await getProductsIDDb(req.params.id))
}

const insertProducts = async (req,res) => {
    let {prodName , quantity , amount , category , prodURL} = req.body
    await insertProductsDb(prodName , quantity , amount , category , prodURL)
    res.send('Data was inserted successfully')
}

const deleteProducts = async (req,res) => {
    let {id} = req.body
    await deleteProductsDb(req.params.id)
    res.send('Data has been deleted')
}

const updateProducts =  async(req,res)=>{
    let {prodName , quantity , amount , category , prodURL} = req.body
    let user = await getProductsDb(req.params.id)
    prodName?prodName = prodName:prodName = user.prodName;
    quantity?quantity = quantity:quantity = user.quantity;
    amount?amount = amount:amount = user.amount;
    category?category = category:category = user.category;
    prodURL?prodURL = prodURL:prodURL = user.prodURL;

    await updateProductsDb( prodName , quantity , amount , category , prodURL , req.params.id);
    res.send('Data has been updated successfully.')
}

export {getProducts , getProductsId , insertProducts, deleteProducts , updateProducts }