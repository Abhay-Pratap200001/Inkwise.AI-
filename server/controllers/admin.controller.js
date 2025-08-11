import User from "../models/user.js";
import bcryptjs from "bcrypt";
import jwt from 'jsonwebtoken'

export const adminsiginup = async (req, res, next) => {  
  const { username, email, password } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashedPassword });
  try {
    await newUser.save(); //saving the new user in database
    res.status(201).json("user Created check you database");
  } catch (error) {
     res.json({success:false, message:error.message})}
};


export const adminLogin = async (req, res, next) => { 
  const { email, password } = req.body;
  try {
    const validUser = await User.findOne({ email });
    if (!validUser) return next(errorHandler(404, 'User not found!'));
    const validPassword = bcryptjs.compareSync(password, validUser.password);// compare db saved pass and user login pass
    if (!validPassword) return next(errorHandler(401, 'Invalid credentials!'));
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET); // coverting userid to jwt to keep user logging continusely without exposing pass
    const { password: pass, ...rest } = validUser._doc;//destrucuring from validuser_document, extactin password field and keep into pass field and other all infor keep in..rest
    res
      .cookie('access_token', token,
       { httpOnly: true })
      .json(rest);
  } catch (error) {
   res.json({success:false, message:error.message})
  }
}; 



export const adminLogout = async (req, res, next) => {  
  try {
    res.clearCookie('access_token'); // clear cooies which is store in frontend
    res.status(200).json('User has been logged out!'); // sending response
  } catch (error) {
   res.json({success:false, message:error.message})
  }
};


// import jwt from "jsonwebtoken";




// export const adminLogin = async (req, res) =>{
//     try {
//         const {email, password} = req.body;
//         if (email !== process.env.ADMIN_EMAIL || password !== process.env.ADMIN_PASSWORD) {
//          return res.json({success: false, message: "Invalid Credentials"})   
//         }

//         const token = jwt.sign({email}, process.env.JWT_SECRET)
//         res.json({success:true, token})
//     } catch (error) {
//       res.json({success:false, message:error.message})
//     }
// }
