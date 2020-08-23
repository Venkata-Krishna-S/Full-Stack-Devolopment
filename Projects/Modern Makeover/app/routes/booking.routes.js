module.exports = app =>{
    const bookings = require('../controllers/booking.controller.js');

    //create a new register
    app.post ("/bookings",bookings.create);
    //retrieve all the users
    app.get('/bookings',bookings.findAll);
    //single user
    app.get('/bookings/:bookingId',bookings.findOne);
}