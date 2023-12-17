//DB Connection
require('dotenv').config();
const mongoose = require("mongoose");

const DB = process.env.DATABASE

const conn = mongoose.connect(DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true,
    useFindAndModify:false
}).then(()=> {
    console.log("connection sucessful");
}).catch((e)=> {
    console.log(e);
});

