const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

const port = process.env.PORT || 5000;



// middleware 
const corsOptions = {
    origin: '*',
    credentials: true,
    optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(express.json());










// define a route 
app.get('/', (req, res) => {
    res.send('to do app server is running');
});


// start the server 
app.listen(port, () => {
    console.log('listening on port ' + port);
})