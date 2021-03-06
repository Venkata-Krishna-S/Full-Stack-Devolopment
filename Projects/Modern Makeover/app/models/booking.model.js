const sql = require('../models/db.js');

const Booking = function (booking) {
    this.name = booking.name;
    this.email = booking.email;
    this.number = booking.number;
    this.specification = booking.specification;
    this.address = booking.address;
};

Booking.create = (newBooking, result) => {
    sql.query(`insert into bookings set ?`, newBooking, (err, res) => {
        if (err) {
            console.log(err);
            result(err, null);
            return;
        }
        console.log("Created Booking : ", { id: res.insertedId, ...newBooking });
        return (null, { id: res.insertedId, ...newBooking });
    })
};

Booking.findById = (bookingId, result) => {
    sql.query(`select * from bookings where Id = ${bookingId}`, (err, res) => {
        if (err) {
            console.log(err);
            result(err, null);
            return;
        }
        if (res.length) {
            console.log('Found Booking:', res[0]);
            result(null, res[0]);
            return;
        }
        result({ kind: 'not_found' }, null);
    })
};

Booking.getAll = result => {
    sql.query('select * from bookings', (err, res) => {
        if (err) {
            console.log(err);
            result(err, null);
            return;
        }
        console.log('Bookings : ', res);
        result(null, res);
    })
};





module.exports = Booking;