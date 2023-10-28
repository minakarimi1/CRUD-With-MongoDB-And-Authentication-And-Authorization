import 'dotenv/config'
import express, { urlencoded } from 'express'
import morgan from 'morgan';
import helmet from 'helmet';
const app = express()
const port = process.env.PORT || 3000;

app.use(express.json()) //body parser
app.use(urlencoded({ extended: true })); // parse data comes from HTML form
app.use(helmet())
app.use(morgan("tiny"))




app.listen(port ,()=>{
  console.log(`Run Server On Port: ${port}`);
})