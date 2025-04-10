const express  = require('express');
const db = require('./util/db-connection');
const app  = express();

const userRoutes = require('./routes/userRoutes');
const busRoutes = require('./routes/busRoutes');
const bookingRoutes = require('./routes/bookingRoutes');

require('./models');

app.use(express.json());

app.use('/users',userRoutes);
app.use('/buses',busRoutes);
app.use('/booking',bookingRoutes);

db.sync({force:true}).then(()=>{
    app.listen(3000,(err)=>{
        console.log('server is running');
    });
}).catch((err)=>{
    console.log(err);
});
