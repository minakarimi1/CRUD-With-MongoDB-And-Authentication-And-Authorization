import { insertUser,getUserEmail } from '../model/mongo-db.js';
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
export default {register}