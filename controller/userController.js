import { getUserDb , getUserIDDb ,getEmailDb, insertUserDb , deleteUserDb , updateUserDb } from "../model/userDb.js";
import { hash } from "bcrypt";
import jwt from "jsonwebtoken"; // Import jsonwebtoken

const getUser =  async(req,res)=> {
    res.json(await getUserDb());
}

const getUserId =   async(req,res)=> {
    console.log(req.params.id);
    res.json(await getUserIDDb(req.params.id))
}

const insertUser = async (req,res) => {
    let {firstName,lastName,userAge,Gender,userRole,emailAdd,userPass,userProfile} = req.body
    let hashedP = await hash(userPass, 10)
    console.log(hashedP)
    await insertUserDb(firstName,lastName,userAge,Gender,userRole,emailAdd,hashedP,userProfile)
    res.send('Data was inserted successfully')
    // let {firstName,lastName,userAge,Gender,userRole,emailAdd,userPass,userProfile} = req.body
    // let hashedP = await hash(userPass, 10)
    // await insertUserDb(firstName,lastName,userAge,Gender,userRole,emailAdd,hashedP,userProfile)
    // res.send('Data was inserted successfully')
}

const deleteUser = async (req,res) => {
    let {id} = req.body
    await deleteUserDb(req.params.id)
    res.send('Data has been deleted')
}

const updateUser =  async(req,res)=>{
    let {firstName,lastName,userAge,Gender,userRole,emailAdd,userPass,userProfile} = req.body
    let user = await getUserDb(req.params.id)
    firstName?firstName = firstName:firstName = user.firstName;
    lastName?lastName = lastName:lastName = user.lastName;
    userAge?userAge = userAge:userAge = user.userAge;
    Gender?Gender = Gender:Gender = user.Gender;
    userRole?userRole = userRole:userRole = user.userRole;
    emailAdd?emailAdd = emailAdd:emailAdd = user.emailAdd;
    userPass?userPass = userPass:userPass = user.userPass;
    userProfile?userProfile = userProfile:userProfile = user.userProfile;

    await updateUserDb( firstName , lastName , userAge , Gender , userRole , emailAdd , userPass , userProfile , req.params.id);
    res.send('Data has been updated successfully.')
}

const loginUser = async (req, res) => {
    const { emailAdd } = req.body;
    const token = req.body.token

    // Fetch user by email
    const user = await getEmailDb(emailAdd);

    if (!user) {
        return res.status(401).json({ message: "Invalid email or password" });
    }

    res.json({ message: "You have signed in successfully", token });
}

export {getUser , getUserId , insertUser, deleteUser , updateUser , loginUser }