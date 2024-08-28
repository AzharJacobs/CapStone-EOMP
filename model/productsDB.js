import { pool } from "../config/config.js";

const  getProductsDb = async () =>{
    let [data] = await pool.query('SELECT * FROM products')
    return data
}

const getProductsIDDb = async (id) =>{
    let [[data]] = await pool.query('SELECT * FROM products WHERE product_id = ?', [id])
    return data
}
 
const insertProductsDb = async( prodName , quantity , amount , category , prodURL) => {
    let [data] = await pool.query(`
        INSERT INTO products (prodName , quantity , amount , category , prodURL)
        VALUES(?,?,?,?,?)
        `, [prodName , quantity , amount , category , prodURL]
    )
    return data
}

const deleteProductsDb = async(id) => {
    await pool.query('DELETE FROM products WHERE product_id =?', [id])
}

const updateProductsDb = async (prodName , quantity , amount , category , prodURL,  id)=>{
    await pool.query('UPDATE products SET prodName = ? , quantity = ? , amount = ? , category = ? , prodURL = ? WHERE product_id = ?', [prodName , quantity , amount , category , prodURL, id])
}

export {getProductsDb , getProductsIDDb , insertProductsDb , deleteProductsDb , updateProductsDb} 