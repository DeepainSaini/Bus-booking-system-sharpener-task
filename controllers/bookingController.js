const db = require('../util/db-connection');
const Bookings = require('../models/bookings');

const addBooking = async (req,res) => {
     
    try{
        const booking = await Bookings.create(req.body);
        res.status(200).json(booking);
    } catch(error){
        console.log(error);
        res.status(500).json({message:'booking failed'});
    }
}


module.exports = {
    addBooking
}