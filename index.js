const express=require('express');
const bodyParser = require('body-parser')
const cors = require('cors');
const helmet = require('helmet');

const { serverPort }=require('./src/config/env.config');
const dbConnection=require('./src/config/pg.db.config')

const app=express();
app.use(cors());
app.use(helmet());
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.listen(serverPort, ()=>{
    console.log(`Server is running on the port : ${serverPort}`);
})