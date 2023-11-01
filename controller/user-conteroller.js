import { insertUser } from '../model/mongo-db.js';
import { getusers } from '../model/mongo-db.js';
import 'dotenv/config'
//register controler
const register = async (req, res, next) => {
  const result = await insertUser(
    req.body.name,
    req.body.email,
    req.body.password
  );
  console.log(result);
  res.json({
    data: result,
    code: "200",
    message: "ok",
  });
};
//get users
const getUsers = async (req,res)=>{
  const result = await getusers()
  res.json({data:result, message:"ok",code:"200"})
}
export default {register,getUsers}