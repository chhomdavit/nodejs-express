const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors({origin : "*"}));

app.get('/',(req,res)=>{
    res.send("Hellow world")
});

require('./src/routes/Product.Route')(app)
require('./src/routes/AdminUser.Router')(app)


const port = 8080
app.listen(port,()=>{
    console.log('http://localhost:'+port)
});