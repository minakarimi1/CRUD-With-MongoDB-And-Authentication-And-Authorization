import mongoose from "mongoose";
mongoose.connect('mongodb://127.0.0.1:27017/usearInfo')
.then(()=>console.log("connect to database"))
.catch((e)=>console.log("could not connect to database",e))

 
const userSchema = new mongoose.Schema ({
  name: {type: String},
  email: {type: String, require:true},
  password: {type: String, require: true},
});
const User = mongoose.model('User',userSchema);