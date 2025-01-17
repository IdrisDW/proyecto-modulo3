const express = require('express')
const app = express()

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/v1', require('./routes'))

const PORT = 4001; 
app.listen(PORT, () =>{
    console.log(`Server is listening on port: ${PORT}`);
});


