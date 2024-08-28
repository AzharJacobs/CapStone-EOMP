import { pool } from "../config/config.js";

const  getUserDb = async () =>{
    let [data] = await pool.query('SELECT * FROM users')
    return data 
}
// console.log(await getUserDb());

const getUserIDDb = async (id) =>{
    let [[data]] = await pool.query('SELECT * FROM users WHERE users_id = ?', [id])
    return data
}
 
const insertUserDb = async( firstName,lastName,userAge,Gender,userRole,emailAdd,userPass,userProfile) => {
    let [data] = await pool.query(`
        INSERT INTO users (firstName,lastName,userAge,Gender,userRole,emailAdd,userPass,userProfile)
        VALUES(?,?,?,?,?,?,?,?)
        `, [firstName,lastName,userAge,Gender,userRole,emailAdd,userPass,userProfile]
    )
    return data
}

const deleteUserDb = async(id) => {
    await pool.query('DELETE FROM users WHERE users_id =?', [id])
}

const updateUserDb = async (firstName , lastName , userAge , Gender , userRole , emailAdd , userPass , userProfile , id)=>{
    await pool.query('UPDATE users SET firstName = ? , lastName = ? , userAge = ? , Gender = ? , userRole = ? , emailAdd = ? , userPass = ? , userProfile = ? WHERE users_id = ?', [firstName , lastName , userAge , Gender , userRole , emailAdd , userPass , userProfile, id])
}

const getEmailDb = async (emailAdd) => {
    let [[data]] = await pool.query('SELECT * FROM users WHERE emailAdd =?' , [emailAdd])
    return data
}

export {getUserDb , getUserIDDb , insertUserDb , deleteUserDb , updateUserDb , getEmailDb} 