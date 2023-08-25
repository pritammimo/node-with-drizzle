 import { eq } from "drizzle-orm";
import { connectToDb } from "../src/db/db.js";
import { AuthSchema } from "../src/db/schema/auth-schema.js";
 import bcrypt from "bcryptjs";
import { asyncHandler } from "../middleware/async.js";
import { ErrorResponse } from "../utils/errorResponse.js";
import jwt from "jsonwebtoken";
export const register=asyncHandler(async(req,res,next)=>{
  const {email,password,username,role}=req.body;
   const db=await connectToDb();
       const salt = bcrypt.genSaltSync(10);
   const hash = bcrypt.hashSync(password, salt);
    await db.insert(AuthSchema).values({
      email,
      username,
      password:hash,
      role
    });
    return res.status(200).json({message:"user has been created"});
})

export const login =asyncHandler(async(req, res,next) => {
  const {email,password}=req.body
  if(!email || !password){
    return next(new ErrorResponse('Please provide all details',400));
  }
  const db=await connectToDb();
  const result = await db.select().from(AuthSchema).where(eq(AuthSchema.email,email));
  if(result?.length ===0){
    return next(new ErrorResponse("Emailid and password didn't match",400));
  }
    const isPasswordCorrect = bcrypt.compareSync(
      password,
      result[0].password
    );
        if (!isPasswordCorrect) {
          return next(new ErrorResponse("Emailid and password didn't match",400));
        }
      
    const token = jwt.sign({ id: result[0].id }, "jwtkey");
    const { password:jwtpassword, ...data } = result[0];
    console.log("r",data);
  //CHECK USER
  return res.status(200).json({message:"successfully login",data,token});
});

export const logout = (req, res) => {
    return res.status(200).json("User has been logout.");
//   res.clearCookie("access_token",{
//     sameSite:"none",
//     secure:true
//   }).status(200).json("User has been logged out.")
};
