const {Op} = require('sequelize');
const db = require('../util/db-connection');
const Buses = require('../models/buses');
const Bookings = require('../models/bookings');
const Users = require('../models/users');

const addbus = async (req,res) => {
    
    try{
        const {busNumber,totalSeats,availableSeats} = req.body;
        const bus = await Buses.create({
            busNumber : busNumber,
            totalSeats : totalSeats,
            availableSeats : availableSeats
        });

        res.status(200).send('Bus has been added');
    } catch(error){
        console.log(error);
        res.status(500).send('Unable to add bus.');
    }

};

const getBus = async (req,res) => {

    try{
        const {seats} = req.params;
        const bus = await Buses.findAll({
            where : {
                availableSeats : {
                    [Op.gt] : seats,
                },
            },
        })

        if(bus.length === 0){
           res.status(404).send(`No bus with available seats greater then ${seats}`)
        }

        res.json(bus);

    } catch(error){
        console.log(error);
        res.status(500).send('Unable to get bus.');
    }
}

const getBusBookings = async (req,res) => {

    try{
        const {id} = req.params;
        const booking = await Bookings.findAll({
            where : {busId : id},
            include : [{model:Users , attributes:['name','email']}]
        })

        res.status(200).json(booking);
    } catch(err){
        console.log(err);
        res.status(500).json({message:'booking not fetched'});
    }
}

module.exports = {
    addbus,
    getBus,
    getBusBookings
}