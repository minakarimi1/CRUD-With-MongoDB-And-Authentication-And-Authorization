import 'dotenv/config'
import express, { urlencoded } from 'express'
import morgan from 'morgan';
import helmet from 'helmet';
import homeRouter from './routes/home-router.js';
import usreRouter from './routes/user-router.js'
const app = express()
const port = process.env.PORT || 8080;

app.use(express.json()) //body parser
app.use(urlencoded({ extended: true })); // parse data comes from HTML form
app.use(helmet())
app.use(morgan("tiny"))

app.use('/',homeRouter);
app.use('/user',usreRouter);



app.listen(port ,()=>{
  console.log(`Run Server On Port: ${port}`);
})