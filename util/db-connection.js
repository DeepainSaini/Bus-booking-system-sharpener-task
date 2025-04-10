const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('testdb','root','964999',{
    host : 'localhost',
    dialect : 'mysql'
});


(async () => {try{
    await sequelize.authenticate();
    console.log('connection has been established.');
} catch(error){
    console.log(error);
}})();

module.exports = sequelize



// const mysql = require('mysql2');

// const connection = mysql.createConnection({
//     host : 'localhost',
//     user : 'root',
//     password : '964999',
//     database : 'testdb'
// })

// connection.connect((err)=>{

//     if(err){
//         console.log(err);
//         return;
//     }

//     console.log('connection has been created');

//     const creationQuery = `CREATE TABLE IF NOT EXISTS users (
        
//          id INT AUTO_INCREMENT PRIMARY KEY,
//          name VARCHAR(20),
//          email VARCHAR(20)
//     )`

//     const creationQuery1 = `CREATE TABLE IF NOT EXISTS buses (
        
//         id INT AUTO_INCREMENT PRIMARY KEY,
//         busNumber VARCHAR(20),
//         totalSeats INT,
//         availableSeats INT
//     )`

//     const creationQuery2 = `CREATE TABLE IF NOT EXISTS bookings (
        
//         id INT AUTO_INCREMENT PRIMARY KEY,
//         seatNumber INT
//     )`

//     const creationQuery3 = `CREATE TABLE IF NOT EXISTS payments (
        
//         id INT AUTO_INCREMENT PRIMARY KEY,
//         amountPaid VARCHAR(20),
//         paymentStatus VARCHAR(20)
//     )`


//     connection.execute(creationQuery,(err)=>{

//         if(err){
//             console.log(err);
//             connection.end();
//             return;
//         }

//         console.log(' Users table has been created');
//     });

//     connection.execute(creationQuery1,(err)=>{

//         if(err){
//             console.log(err);
//             connection.end();
//             return;
//         }

//         console.log('Buses table has been created');
//     });

//     connection.execute(creationQuery2,(err)=>{

//         if(err){
//             console.log(err);
//             connection.end();
//             return;
//         }

//         console.log('Bookings table has been created');
//     });

//     connection.execute(creationQuery3,(err)=>{

//         if(err){
//             console.log(err);
//             connection.end();
//             return;
//         }

//         console.log('Payments table has been created');
//     });
// })

// module.exports = connection;