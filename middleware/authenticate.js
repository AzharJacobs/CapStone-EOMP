import { compare } from "bcrypt";
import { getEmailDb } from "../model/userDb.js";
import jwt from "jsonwebtoken";
import { config } from "dotenv";
config()



const checkUser = async (req, res, next) => {
    const { emailAdd, userPass } = req.body;
    console.log(emailAdd);
    let hashedPassword = (await getEmailDb(emailAdd)).userPass;
    console.log(hashedPassword);
    let result = await compare(userPass, hashedPassword);
    if (result == true) {
        let token = jwt.sign({ emailAdd: emailAdd }, process.env.SECRET_KEY, { expiresIn: '1h' });
        req.body.token = token;
        console.log("token",token) // Redirect to the admin page
        next()
    } else {
        res.send('Invalid password');
    }
};

const verifyTheToken = (req, res, next) => {
    let { cookie } = req.headers;
    // checks if the token exists first
    let token = cookie && cookie.split("=")[1];
    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
        if (err) {
            res.json({ message: 'token has expired' });
            return;
        }
        req.body = req.body || {}; // Initialize req.body as an object
        req.body.user = decoded.emailAdd
        console.log(req.body.emailAdd);
    })
    console.log(token);
    next();
};

// // Login route
// app.post('/login', checkUser);

// // Admin page route
// app.get('/admin', verifyTheToken, (req, res) => {
//     // Display the user information and product info
//     // const products = [...]; // Define the products array or replace with actual data
//     res.render('admin', { user: req.body.user, products });
// });

export { checkUser, verifyTheToken }