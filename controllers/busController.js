const db = require('../util/db-connection');

const addbus = (req,res) => {
    
    const {busNumber,totalSeats,availableSeats} = req.body;
    const insertQuery = `INSERT INTO buses(busNumber,totalSeats,availableSeats) VALUES(?,?,?)`

    db.execute(insertQuery,[busNumber,totalSeats,availableSeats],(err,result)=>{

        if(err){
            console.log(err);
            res.status(500).send(err.message);
            db.end();
            return;
        }

        res.status(200).send(`bus with the number ${busNumber} has been created`);
    })
};

const getBus = (req,res) => {

    const {seats} = req.params;
    const selectQuery = `SELECT * FROM buses WHERE availableSeats > ${seats}`;

    db.execute(selectQuery,(err,result)=>{

        if(err){
            console.log(err);
            res.status(500).send(err.message);
            db.end();
            return;
        }

        if(result.length === 0){
            res.status(404).send(`No bus available with seats more then ${seats}`);
            return;
        }

        res.json(result);
    })
} 

module.exports = {
    addbus,
    getBus
}