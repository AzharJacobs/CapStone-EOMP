import { compare } from "bcrypt";
import { getEmailDb } from "../model/userDb.js";
import jwt from "jsonwebtoken";
import { config } from "dotenv";
config()
const checkUser = async (req, res, next) => {
    const {emailAdd, userPass} = req.body;
    console.log(emailAdd);
    let hashedPassword = (await getEmailDb(emailAdd)).userPass;
    let result = await compare(userPass, hashedPassword);
    if (result==true) {
        let token = jwt.sign({emailAdd: emailAdd}, process.env.SECRET_KEY, {expiresIn: '1h'})
        // console.log(token);
        req.body.token = token
        next()
        return
    } else {
        res.send('Invalid password')
    }
}
const verifyTheToken = (req, res, next) => {
    let {cookie} = req.headers;
    // checks if the token exists first
    let token = cookie && cookie.split("=")[1];
    jwk.verify(token, process.env.SECRET_KEY, (err, decoded) => {
        if (err) {
            res.json({message: 'token has expired'});
            return;
        }
        req.body.user = decoded.emailAdd
        console.log(req.body.emailAdd);
    })
    console.log(token);
    next();
}
export {checkUser, verifyTheToken}