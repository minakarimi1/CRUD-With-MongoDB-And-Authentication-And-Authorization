import  jwt from "jsonwebtoken";
import 'dotenv/config';

function auth(req,res,next){
  let token = req.header('Authorization');
  if(!token){
    return res.status(401).send("Access Denied")
  }

  try{
    token = token.split(' ')[1]
    const decode = jwt.verify(token, process.env.SECRET_KEY);
    req.userDate = decode;
    next();
  }catch(error){
    return res.status(400).send(process.env.SECRET_KEY)
  }
}