const Users = require('../models/users');
const Bookings = require('../models/bookings');
const Buses = require('../models/buses');

Users.hasMany(Bookings);
Bookings.belongsTo(Users);

Buses.hasMany(Bookings);
Bookings.belongsTo(Buses);

module.exports = {
    Users,
    Bookings
}