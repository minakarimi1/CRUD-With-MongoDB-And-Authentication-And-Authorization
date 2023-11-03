import { insertUser, getUserEmail } from "../model/mongo-db.js";
import "dotenv/config";
import Joi from "joi";
import _ from "lodash";
import bcrypt from "bcrypt";

//register controler
const register = async (req, res, next) => {
  const schema = {
    name: Joi.string()
      .min(3)
      .max(50)
      .required()
      .messages({ "string.min": process.env.name_min || "" }),
    email: Joi.string().email().required(),
    password: Joi.string()
      .min(6)
      .max(100)
      .required()
      .messages({ "pass_min": process.env.pass_min || "" }),
  };

//add object schema to JOi from up validate
const validateResult = Joi.object(schema).validate(req.body);
if (validateResult.error) {
  return res.send(validateResult.error.details[0].message);
}

//check DB for no repitly Email
const user = await getUserEmail(req.body.email);
if (user) return res.json({ data: null, message: "ایمیل تکراری می باشد" });

//hashing passwords
const hashedPassword = await bcrypt.hash(req.body.password, 10);

  // add to database
  const result = await insertUser(
    req.body.name,
    req.body.email,
    hashedPassword
  );
  console.log(result);
  res.json({
    data: _.pick(result,"name","email"),
    code: "200",
    message: "ok",
  });
};
export default { register };
