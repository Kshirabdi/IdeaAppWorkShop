const express= require('express');
const serverConfig = require('./configs/server.config');
const app = express();

app.listen(serevrConfig.PORT, ()=>
console.log(`Server started on the port number ${serverConfig.PORT}`)

)