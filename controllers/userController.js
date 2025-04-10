const db = require('../util/db-connection');
const Users = require('../models/users');
const Bookings = require('../models/bookings');
const Buses = require('../models/buses');

const addUsers = async (req,res,next) => {
    
    try{
        const {name,email} = req.body;
        const user = await Users.create({
            name : name,
            email : email
        });

        res.status(200).send('User has been added');
    } catch(error){
        console.log(error);
        res.status(500).send('Unable to add user.');
    }
    
};

const getUsers = async (req,res,next) => {
    
    try{
        const user = await Users.findAll();
        res.status(200).json(user);
    } catch(error){
        console.log(error);
    }
    
};

const getUserBookings = async (req,res) => {
     
    try{
        const {id} = req.params;
        const booking = await Bookings.findAll({
            where : {userId:id},
            include : [{model:Buses , attributes : ['busNumber']}]
        })
        res.status(200).json(booking);
    } catch(error){
        console.log(error);
        res.status(500).json({message:'unable to fetch'});
    }
};

module.exports = {

    addUsers,
    getUsers,
    getUserBookings
}