 import { eq } from "drizzle-orm";
import { connectToDb } from "../src/db/db.js";
import { AuthSchema } from "../src/db/schema/auth-schema.js";
 import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken";

export const register = async(req, res) => {
   const {email,password,username,role}=req.body;
   if(email ===undefined ||password===undefined || username===undefined || role ===undefined){
    return res.status(409).json({message:"Please add all the details"})
   }
   const db=await connectToDb();
   const find = await db.select().from(AuthSchema).where(eq(AuthSchema.email,req.body.email));
   if(find?.length>0){
    return res.status(409).json({message:"user already exists"})
   }
       const salt = bcrypt.genSaltSync(10);
   const hash = bcrypt.hashSync(req.body.password, salt);
    await db.insert(AuthSchema).values({
      email:req.body.email,
     username:req.body.username,
      password:hash,
      role:req.body.role
    });
    
  // console.log("up",find);
    return res.status(200).json({message:"user has been created"});
  //CHECK EXISTING USER
//   const q = "SELECT * FROM users WHERE email = ? OR username = ?";

//   db.query(q, [req.body.email, req.body.username], (err, data) => {
//     if (err) return res.status(500).json(err);
//     if (data.length) return res.status(409).json("User already exists!");

//     //Hash the password and create a user
//     const salt = bcrypt.genSaltSync(10);
//     const hash = bcrypt.hashSync(req.body.password, salt);

//     const q = "INSERT INTO users(`username`,`email`,`password`) VALUES (?)";
//     const values = [req.body.username, req.body.email, hash];

//     db.query(q, [values], (err, data) => {
//       if (err) return res.status(500).json(err);
//       return res.status(200).json("User has been created.");
//     });
//   });
};

export const login = (req, res) => {
  //CHECK USER
  return res.status(200).json("User has been login.");
//   const q = "SELECT * FROM users WHERE username = ?";

//   db.query(q, [req.body.username], (err, data) => {
//     if (err) return res.status(500).json(err);
//     if (data.length === 0) return res.status(404).json("User not found!");

//     //Check password
//     const isPasswordCorrect = bcrypt.compareSync(
//       req.body.password,
//       data[0].password
//     );

//     if (!isPasswordCorrect)
//       return res.status(400).json("Wrong username or password!");

//     const token = jwt.sign({ id: data[0].id }, "jwtkey");
//     const { password, ...other } = data[0];

//     res
//       .cookie("access_token", token, {
//         httpOnly: true,
//       })
//       .status(200)
//       .json(other);
//   });
};

export const logout = (req, res) => {
    return res.status(200).json("User has been logout.");
//   res.clearCookie("access_token",{
//     sameSite:"none",
//     secure:true
//   }).status(200).json("User has been logged out.")
};
