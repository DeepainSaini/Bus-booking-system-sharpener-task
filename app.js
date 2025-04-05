const express  = require('express');
const db = require('./util/db-connection');
const app  = express();

const userRoutes = require('./routes/userRoutes');
const busRoutes = require('./routes/busRoutes');

app.use(express.json());

app.use('/users',userRoutes);
app.use('/buses',busRoutes);

app.get('/',(req,res,next)=>{
    res.send('Hello World');
})

app.listen(3000,(err)=>{
    console.log('server is running');
});