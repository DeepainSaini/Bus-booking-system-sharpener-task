const db = require('../util/db-connection');

const addUsers = (req,res,next) => {
    const {name,email} = req.body;
    const insertQuery = `INSERT INTO users(name,email) VALUES(?,?)`;

    db.execute(insertQuery,[name,email],(err)=>{

        if(err){
            console.log(err);
            res.status(500).send(err.message);
            db.end();
        }

        res.status(200).send('User has been adeed.')
    })
    
};

const getUsers = (req,res,next) => {
    
    const selectQuery = `SELECT * FROM users`;

    db.execute(selectQuery,(err,result)=>{
        
        if(err){
            console.log(err);
            res.status(500).send(err.message);
            db.end();
        }

        res.json(result);

        
    })
    
};

module.exports = {

    addUsers,
    getUsers
}